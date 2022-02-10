import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-ngc-object-search-form',
  templateUrl: './ngc-object-search-form.component.html',
  styleUrls: ['./ngc-object-search-form.component.css']
})
export class NgcObjectSearchFormComponent implements OnInit {
  @Output() objectSearchEvent = new EventEmitter<string>()

  supportedCatalogs = ["NGC", "IC"]
  searchForm = new FormGroup({
    catalogControl: new FormControl(this.supportedCatalogs[0], [
      Validators.required,
    ]),
    numberControl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/)
    ])
  })

  constructor() {
    // intentionally empty
  }

  get numberControl() {
    return this.searchForm.get('numberControl')
  }

  executeSearch(): void {
    if (this.searchForm.invalid) {
      return
    }

    const controlData = this.searchForm.value
    const objectNumber = controlData.numberControl.padStart(4, "0")
    this.objectSearchEvent.emit(controlData.catalogControl + objectNumber)
  }

  ngOnInit(): void {
    this.searchForm.valueChanges.pipe(debounceTime(700)).subscribe(_ => this.executeSearch())
  }

}
