import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ListFilter} from "../list-filter";
import {FormControl, FormGroup} from "@angular/forms";
import {Catalog} from "../catalog";
import {Constellation, OpenNGCService} from "@astro-npm/astro-server-angular";

@Component({
  selector: 'app-ngc-filter-settings',
  templateUrl: './ngc-filter-settings.component.html',
  styleUrls: ['./ngc-filter-settings.component.css']
})
export class NgcFilterSettingsComponent implements OnInit {
  @Output() filterSettingsEvent = new EventEmitter<ListFilter>();

  filterForm = new FormGroup({
    messierControl: new FormControl(''),
    catalogControl: new FormControl(''),
    constellationsControl: new FormControl('')
  })
  constellations: Array<Constellation> = []
  isCollapsed = true;

  constructor(private readonly openNgcService: OpenNGCService) {
  }

  private static getMessierValue(value: any): boolean | undefined {
    switch (value) {
      case "true":
        return true
      case "false":
        return false;
      default:
        return undefined;
    }
  }

  private static getCatalogValue(value: any): Catalog | undefined {
    switch (value) {
      case "ngc":
        return Catalog.NGC
      case "ic":
        return Catalog.IC
      default:
        return undefined
    }
  }

  ngOnInit(): void {
    this.openNgcService.getConstellations('body').subscribe((constellations: Array<Constellation>) => {
      this.constellations = constellations
    })
  }

  applyFilter(): void {
    const filterSettings = this.filterForm.value

    const filter = new ListFilter()
    filter.messier = NgcFilterSettingsComponent.getMessierValue(filterSettings.messierControl)
    filter.catalog = NgcFilterSettingsComponent.getCatalogValue(filterSettings.catalogControl)
    if (filterSettings.constellationsControl.includes('-- Any --')) {
      filter.constellations = []
    } else {
      filter.constellations = filterSettings.constellationsControl
    }
    this.filterSettingsEvent.emit(filter)
  }
}
