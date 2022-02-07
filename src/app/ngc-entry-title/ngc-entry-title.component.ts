import {Component, Input} from '@angular/core';
import {NGCEntry} from "@astro-npm/astro-server-angular";

@Component({
  selector: 'app-ngc-entry-title',
  templateUrl: './ngc-entry-title.component.html',
  styleUrls: ['./ngc-entry-title.component.css']
})
export class NgcEntryTitleComponent {
  @Input() ngcEntry?: NGCEntry
  @Input() isExpanded: boolean = false
  @Input() isObjectVisible: boolean = true

  constructor() {
    // intentionally empty
  }
}
