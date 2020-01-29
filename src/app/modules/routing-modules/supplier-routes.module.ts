import { SuppliersViewComponent } from './../../components/suppliers/suppliers-view/suppliers-view.component';
import { SuppliersListComponent } from './../../components/suppliers/suppliers-list/suppliers-list.component';
import { SuppliersEditComponent } from './../../components/suppliers/suppliers-edit/suppliers-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: SuppliersListComponent, canActivate: [], children: [
      { path: 'new', component: SuppliersEditComponent },
      { path: ':id', component: SuppliersViewComponent, resolve: [] },
      { path: ':id/edit', component: SuppliersEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    SuppliersEditComponent,
    SuppliersListComponent,
    SuppliersViewComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutesModule {

}
