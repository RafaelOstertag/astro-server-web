import {Component, Input} from '@angular/core';
import {HorizontalCoordinates} from "@rafaelostertag/astro-server-angular";

@Component({
  selector: 'app-ngc-horizontal-coordinates',
  templateUrl: './ngc-horizontal-coordinates.component.html',
  styleUrls: ['./ngc-horizontal-coordinates.component.css']
})
export class NgcHorizontalCoordinatesComponent {
  @Input() horizontalCoordinates?: HorizontalCoordinates

  constructor() {
    // intentionally empty
  }
}
