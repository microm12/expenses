import { MaterialModule } from './../material.module';
import { SuppliersViewComponent } from './../../components/suppliers/suppliers-view/suppliers-view.component';
import { SuppliersListComponent } from './../../components/suppliers/suppliers-list/suppliers-list.component';
import { SuppliersEditComponent } from './../../components/suppliers/suppliers-edit/suppliers-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from 'src/app/components/suppliers/suppliers.component';

const routes: Routes = [
  {
    path: '', component: SuppliersComponent, canActivate: [], children: [
      { path: '', component: SuppliersListComponent },
      { path: 'new', component: SuppliersEditComponent },
      { path: ':id', component: SuppliersViewComponent, resolve: [] },
      { path: ':id/edit', component: SuppliersEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    SuppliersEditComponent,
    SuppliersListComponent,
    SuppliersViewComponent,
    SuppliersComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutesModule {

}
