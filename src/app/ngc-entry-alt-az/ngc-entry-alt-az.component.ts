import {Component, Input} from '@angular/core';
import {NGCEntryWithHorizontalCoordinates} from "@rafaelostertag/astro-server-angular";

@Component({
  selector: 'app-ngc-entry-alt-az',
  templateUrl: './ngc-entry-alt-az.component.html',
  styleUrls: ['./ngc-entry-alt-az.component.css']
})
export class NgcEntryAltAzComponent {
  @Input() ngcEntryWithHorizontalCoordinates?: NGCEntryWithHorizontalCoordinates
  isCollapsed: boolean = true

  constructor() {
    // intentionally empty
  }
}
