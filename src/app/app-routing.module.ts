import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgcCatalogComponent} from "./ngc-catalog/ngc-catalog.component";
import {NgcCatalogExtendedComponent} from "./ngc-catalog-extended/ngc-catalog-extended.component";

const routes: Routes = [
  {path: 'ngc-catalog', component: NgcCatalogComponent},
  {path: 'ngc-catalog-extended', component: NgcCatalogExtendedComponent},
  {path: '', redirectTo: '/ngc-catalog', pathMatch: 'full'},
  {path: '**', component: NgcCatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
