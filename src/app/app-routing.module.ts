import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgcCatalogComponent} from "./ngc-catalog/ngc-catalog.component";
import {NgcCatalogAltAzComponent} from "./ngc-catalog-alt-az/ngc-catalog-alt-az.component";

const routes: Routes = [
  {path: 'ngc-catalog', component: NgcCatalogComponent},
  {path: 'ngc-catalog-alt-az', component: NgcCatalogAltAzComponent},
  {path: '', redirectTo: '/ngc-catalog', pathMatch: 'full'},
  {path: '**', component: NgcCatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
