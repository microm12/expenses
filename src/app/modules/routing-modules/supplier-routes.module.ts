import { SuppliersViewComponent } from './../../components/suppliers/suppliers-view/suppliers-view.component';
import { SuppliersListComponent } from './../../components/suppliers/suppliers-list/suppliers-list.component';
import { SuppliersEditComponent } from './../../components/suppliers/suppliers-edit/suppliers-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersNewComponent } from 'src/app/components/suppliers/suppliers-new/suppliers-new.component';

const routes: Routes = [
  {
    path: '', component: SuppliersListComponent, canActivate: [], children: [
      { path: 'new', component: SuppliersNewComponent },
      { path: ':id', component: SuppliersViewComponent, resolve: [] },
      { path: ':id/edit', component: SuppliersEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    SuppliersEditComponent,
    SuppliersListComponent,
    SuppliersViewComponent,
    SuppliersNewComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutesModule {

}
