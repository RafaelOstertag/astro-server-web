import {Component, Input} from '@angular/core';
import {NGCEntry} from "@rafaelostertag/astro-server-angular";

@Component({
  selector: 'app-ngc-entry-detail',
  templateUrl: './ngc-entry-detail.component.html',
  styleUrls: ['./ngc-entry-detail.component.css']
})
export class NgcEntryDetailComponent {
  @Input() ngcEntry?: NGCEntry

  constructor() {
    // intentionally empty
  }
}
