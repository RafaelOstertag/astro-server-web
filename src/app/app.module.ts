import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgcCatalogComponent} from './ngc-catalog/ngc-catalog.component';
import {HttpClientModule} from "@angular/common/http";
import {AstroServerApiModule, BASE_PATH} from '@rafaelostertag/astro-server-angular';
import {NgcEntryDetailComponent} from './ngc-entry-detail/ngc-entry-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgcFilterSettingsComponent} from './ngc-filter-settings/ngc-filter-settings.component';
import {NgcCatalogAltAzComponent} from './ngc-catalog-alt-az/ngc-catalog-alt-az.component';
import {NgcLocationComponent} from './ngc-location/ngc-location.component';
import {NgcEntryComponent} from './ngc-entry/ngc-entry.component';
import {NgcHorizontalCoordinatesComponent} from './ngc-horizontal-coordinates/ngc-horizontal-coordinates.component';
import {NgcEntryTitleComponent} from './ngc-entry-title/ngc-entry-title.component';
import {NgcEntryAltAzComponent} from './ngc-entry-alt-az/ngc-entry-alt-az.component';
import {environment} from "../environments/environment";
import {NgcObjectSearchComponent} from './ngc-object-search/ngc-object-search.component';
import {NgcObjectSearchFormComponent} from './ngc-object-search-form/ngc-object-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NgcCatalogComponent,
    NgcEntryDetailComponent,
    NgcFilterSettingsComponent,
    NgcCatalogAltAzComponent,
    NgcLocationComponent,
    NgcEntryComponent,
    NgcHorizontalCoordinatesComponent,
    NgcEntryTitleComponent,
    NgcEntryAltAzComponent,
    NgcObjectSearchComponent,
    NgcObjectSearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AstroServerApiModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [{provide: BASE_PATH, useValue: environment.serverUrl}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
