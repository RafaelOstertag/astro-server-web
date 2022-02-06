import {Component, Input} from '@angular/core';
import {NGCEntryWithHorizontalCoordinates} from "@astro-npm/astro-server-angular";

@Component({
  selector: 'app-ngc-entry-extended',
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
