export class Location {
  longitude: number
  latitude: number
  time: Date

  constructor(longitude: number, latitude: number, time: Date) {
    this.longitude = longitude
    this.latitude = latitude
    this.time = time
  }

}
