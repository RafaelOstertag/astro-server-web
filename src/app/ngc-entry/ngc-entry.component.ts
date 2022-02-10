import {Component, Input} from '@angular/core';
import {NGCEntry} from "@astro-npm/astro-server-angular";

@Component({
  selector: 'app-ngc-entry',
  templateUrl: './ngc-entry.component.html',
  styleUrls: ['./ngc-entry.component.css']
})
export class NgcEntryComponent {
  @Input() ngcEntry?: NGCEntry
  @Input() isCollapsed: boolean = true

  constructor() {
    // intentionally empty
  }
}
