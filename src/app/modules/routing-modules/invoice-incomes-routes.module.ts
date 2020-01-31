import { InvoiceIncomesListComponent } from './../../components/invoice-incomes/invoice-incomes-list/invoice-incomes-list.component';
import { InvoiceIncomesViewComponent } from './../../components/invoice-incomes/invoice-incomes-view/invoice-incomes-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceIncomesEditComponent } from 'src/app/components/invoice-incomes/invoice-incomes-edit/invoice-incomes-edit.component';
import { MaterialModule } from '../material.module';
import { InvoiceIncomesComponent } from 'src/app/components/invoice-incomes/invoice-incomes.component';

const routes: Routes = [
  {
    path: '', component: InvoiceIncomesComponent, canActivate: [], children: [
      { path: '', component: InvoiceIncomesListComponent },
      { path: 'new', component: InvoiceIncomesEditComponent },
      { path: ':id', component: InvoiceIncomesViewComponent, resolve: [] },
      { path: ':id/edit', component: InvoiceIncomesEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    InvoiceIncomesEditComponent,
    InvoiceIncomesViewComponent,
    InvoiceIncomesListComponent,
    InvoiceIncomesComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceIncomesRoutesModule {

}
