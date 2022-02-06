import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgcCatalogComponent} from './ngc-catalog/ngc-catalog.component';
import {HttpClientModule} from "@angular/common/http";
import {AstroServerApiModule, BASE_PATH} from '@astro-npm/astro-server-angular';
import {NgcEntryDetailComponent} from './ngc-entry-detail/ngc-entry-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgcFilterSettingsComponent} from './ngc-filter-settings/ngc-filter-settings.component';
import {NgcCatalogExtendedComponent} from './ngc-catalog-extended/ngc-catalog-extended.component';
import {NgcLocationComponent} from './ngc-location/ngc-location.component';
import {NgcEntryComponent} from './ngc-entry/ngc-entry.component';
import {NgcHorizontalCoordinatesComponent} from './ngc-horizontal-coordinates/ngc-horizontal-coordinates.component';
import {NgcEntryTitleComponent} from './ngc-entry-title/ngc-entry-title.component';
import {NgcEntryExtendedComponent} from './ngc-entry-extended/ngc-entry-extended.component';
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    NgcCatalogComponent,
    NgcEntryDetailComponent,
    NgcFilterSettingsComponent,
    NgcCatalogExtendedComponent,
    NgcLocationComponent,
    NgcEntryComponent,
    NgcHorizontalCoordinatesComponent,
    NgcEntryTitleComponent,
    NgcEntryExtendedComponent
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
