import {Component} from '@angular/core';
import {GetObjectRequestParams, NGCEntry, OpenNGCService} from "@rafaelostertag/astro-server-angular";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {ResponseState} from "../response-state";

@Component({
  selector: 'app-ngc-object-search',
  templateUrl: './ngc-object-search.component.html',
  styleUrls: ['./ngc-object-search.component.css']
})
export class NgcObjectSearchComponent {
  state: ResponseState = ResponseState.OK
  currentEntry?: NGCEntry;
  currentObjectName?: string


  constructor(private readonly openNGCService: OpenNGCService) {
    // intentionally empty
  }

  handleSearchEvent(object: string) {
    const requestParameters: GetObjectRequestParams = {
      objectName: object
    }

    this.currentObjectName = object

    this.openNGCService.getObject(requestParameters, "response").subscribe({
      next: (response: HttpResponse<NGCEntry>) => this.handleObjectFound(response),
      error: (response: HttpErrorResponse) => this.handleError(response)
    })
  }

  private handleObjectFound(response: HttpResponse<NGCEntry>): void {
    if (response.body) {
      this.state = ResponseState.OK
      this.currentEntry = response.body
    } else {
      this.state = ResponseState.ERROR
      this.currentEntry = undefined
    }
  }

  private handleError(response: HttpErrorResponse): void {
    if (response.status === 404) {
      this.state = ResponseState.NO_ENTRIES
    } else {
      this.state = ResponseState.ERROR
    }
  }
}
