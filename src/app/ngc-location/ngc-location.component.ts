import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Location} from "../location";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbDate, NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
import {NgbTime} from "@ng-bootstrap/ng-bootstrap/timepicker/ngb-time";
import {LocationSettingsService} from "../location-settings.service";

@Component({
  selector: 'app-ngc-location',
  templateUrl: './ngc-location.component.html',
  styleUrls: ['./ngc-location.component.css']
})
export class NgcLocationComponent implements OnInit {
  @Output() locationSettingsEvent = new EventEmitter<Location>()
  locationForm: FormGroup = new FormGroup({})

  constructor(private readonly locationSettingsService: LocationSettingsService) {

  }

  get longitudeControl() {
    return this.locationForm.get('longitudeControl');
  }

  get latitudeControl() {
    return this.locationForm.get('latitudeControl');
  }

  get dateControl() {
    return this.locationForm.get('dateControl')
  }

  get timeControl() {
    return this.locationForm.get('timeControl')
  }

  private static getCurrentDate(): Date {
    return new Date(Date.now());
  }

  ngOnInit(): void {
    const longitude = this.locationSettingsService.getLongitude() ?? 8.8330864
    const latitude = this.locationSettingsService.getLatitude() ?? 47.5479365

    this.locationForm = new FormGroup(
      {
        longitudeControl: new FormControl(longitude, [
          Validators.required,
          Validators.min(-179.99999),
          Validators.max(179.99999)]),
        latitudeControl: new FormControl(latitude, [
          Validators.required,
          Validators.min(-89.99999),
          Validators.max(89.99999)]),
        dateControl: new FormControl(this.getCurrentNgbDateStruct(), [Validators.required]),
        timeControl: new FormControl(this.getCurrentNgbTimeStruct(), [Validators.required])
      }
    )
  }

  getCurrentNgbTimeStruct(): NgbTimeStruct {
    const currentDate = NgcLocationComponent.getCurrentDate();
    return {
      hour: currentDate.getHours(),
      minute: currentDate.getMinutes(),
      second: currentDate.getSeconds()
    }
  }

  getCurrentNgbDateStruct(): NgbDateStruct {
    const date = NgcLocationComponent.getCurrentDate()
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    }
  }

  applyLocation(): void {
    if (this.locationForm.invalid) {
      return
    }
    const locationSettings = this.locationForm.value
    const dateModel: NgbDate = locationSettings.dateControl
    const timeModel: NgbTime = locationSettings.timeControl
    const observerTime = new Date(dateModel.year, dateModel.month - 1, dateModel.day, timeModel.hour, timeModel.minute, timeModel.second)
    const longitude = locationSettings.longitudeControl;
    const latitude = locationSettings.latitudeControl;

    this.locationSettingsService.storeLatitude(parseFloat(latitude))
    this.locationSettingsService.storeLongitude(parseFloat(longitude))

    const location = new Location(
      longitude,
      latitude,
      observerTime
    )
    this.locationSettingsEvent.emit(location)
  }
}
