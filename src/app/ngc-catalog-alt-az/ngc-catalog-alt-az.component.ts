import {Component} from '@angular/core';
import {
  ListObjectsExtendedRequestParams,
  NGCEntryWithHorizontalCoordinates,
  OpenNGCService
} from "@astro-npm/astro-server-angular";
import {ResponseState} from "../response-state";
import {ListFilter} from "../list-filter";
import {Location} from "../location";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {ApiHeaders} from "../api-headers";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-ngc-catalog-alt-az',
  templateUrl: './ngc-catalog-alt-az.component.html',
  styleUrls: ['./ngc-catalog-alt-az.component.css']
})
export class NgcCatalogAltAzComponent {
  catalogEntries: Array<NGCEntryWithHorizontalCoordinates> = []
  state: ResponseState = ResponseState.OK
  currentListFilter: ListFilter = new ListFilter()
  currentLocation?: Location
  firstPage: boolean = true
  lastPage: boolean = false
  // This starts at 1, but the API is zero based
  pageNumber: number = 1
  pageSize: number = 25
  totalPages: number = 0
  totalEntries: number = 0;

  constructor(private readonly openNGCService: OpenNGCService) {
  }

  private static format(date: Date): string {
    return formatDate(date, 'yyyy-MM-ddTHH:mm:ss.000ZZZZZ', 'en-us')
  }

  applyFilters(listFilter: ListFilter): void {
    this.currentListFilter = listFilter
    this.pageNumber = 1
    this.fetchCatalogEntries()
  }

  applyLocation(location: Location): void {
    this.currentLocation = location
    this.fetchCatalogEntries()
  }

  changePage(pageNumber: number) {
    this.pageNumber = pageNumber
    this.fetchCatalogEntries()
  }

  private fetchCatalogEntries() {
    if (!this.currentLocation) {
      console.info('No location set, will not call service')
      return
    }
    const requestParameters = this.compileRequestParameters();

    this.openNGCService.listObjectsExtended(requestParameters, "response")
      .subscribe({
        next: (response: HttpResponse<Array<NGCEntryWithHorizontalCoordinates>>) => this.handleResponse(response),
        error: (response: HttpErrorResponse) => this.handleError(response)
      })
  }

  private handleResponse(response: HttpResponse<Array<NGCEntryWithHorizontalCoordinates>>): void {
    if (response.body) {
      this.catalogEntries = response.body
    }
    this.totalPages = parseInt(response.headers.get(ApiHeaders.TOTAL_PAGES) ?? "0")
    this.pageNumber = parseInt(response.headers.get(ApiHeaders.PAGE_INDEX) ?? "0") + 1
    this.pageSize = parseInt(response.headers.get(ApiHeaders.PAGE_SIZE) ?? "25")
    this.lastPage = (response.headers.get(ApiHeaders.LAST_PAGE) ?? "false") === "true"
    this.firstPage = (response.headers.get(ApiHeaders.FIRST_PAGE) ?? "false") === "true"
    this.totalEntries = parseInt((response.headers.get(ApiHeaders.TOTAL_ENTRIES) ?? "0"))
    this.state = ResponseState.OK
  }

  private handleError(response: HttpErrorResponse): void {
    if (response.status === 404) {
      this.state = ResponseState.NO_ENTRIES
    } else {
      this.state = ResponseState.ERROR
    }
  }

  private compileRequestParameters(): ListObjectsExtendedRequestParams {
    const requestParameters: ListObjectsExtendedRequestParams = {
      longitude: this.currentLocation!.longitude,
      latitude: this.currentLocation!.latitude,
      localTime: NgcCatalogAltAzComponent.format(this.currentLocation!.time),
      pageSize: this.pageSize,
      pageIndex: this.pageNumber > 1 ? this.pageNumber - 1 : 0,
    }

    if (this.currentListFilter.catalog) {
      requestParameters.catalog = this.currentListFilter.catalog
    }

    if (this.currentListFilter.minVMag) {
      requestParameters.vMagMin = this.currentListFilter.minVMag
    }

    if (this.currentListFilter.maxVMag) {
      requestParameters.vMagMax = this.currentListFilter.maxVMag
    }

    if (this.currentListFilter.messier) {
      requestParameters.messier = this.currentListFilter.messier
    }

    if (this.currentListFilter.constellations.length == 0) {
      requestParameters.constellations = undefined
    } else {
      requestParameters.constellations = new Set<string>(this.currentListFilter.constellations)
    }

    if (this.currentListFilter.types.length == 0) {
      requestParameters.types = undefined
    } else {
      requestParameters.types = new Set<string>(this.currentListFilter.types)
    }
    return requestParameters;
  }

}
