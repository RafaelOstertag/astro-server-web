import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationSettingsService {

  private readonly latitudeKey = 'astro-location-latitude';
  private readonly longitudeKey = 'astro-location-longitude';

  constructor() {
    // intentionally empty
  }

  storeLongitude(longitude: number): void {
    localStorage.setItem(this.longitudeKey, longitude.toString())
  }

  storeLatitude(latitude: number): void {
    localStorage.setItem(this.latitudeKey, latitude.toString())
  }

  getLongitude(): number | undefined {
    const longitudeString = localStorage.getItem(this.longitudeKey)
    if (longitudeString) {
      return parseFloat(longitudeString)
    }
    return undefined
  }

  getLatitude(): number | undefined {
    const latitudeString = localStorage.getItem(this.latitudeKey)
    if (latitudeString) {
      return parseFloat(latitudeString)
    }
    return undefined
  }
}
