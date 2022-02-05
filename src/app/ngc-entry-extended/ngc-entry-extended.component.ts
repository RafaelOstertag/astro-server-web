import {Component, Input} from '@angular/core';
import {NGCEntryWithHorizontalCoordinates} from "@astro-npm/astro-server-angular";

@Component({
  selector: 'app-ngc-entry-extended',
  templateUrl: './ngc-entry-extended.component.html',
  styleUrls: ['./ngc-entry-extended.component.css']
})
export class NgcEntryExtendedComponent {
  @Input() ngcEntryWithHorizontalCoordinates?: NGCEntryWithHorizontalCoordinates
  isCollapsed: boolean = true

  constructor() {
    // intentionally empty
  }
}
