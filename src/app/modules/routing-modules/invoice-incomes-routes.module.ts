import { InvoiceIncomesListComponent } from './../../components/invoice-incomes/invoice-incomes-list/invoice-incomes-list.component';
import { InvoiceIncomesNewComponent } from './../../components/invoice-incomes/invoice-incomes-new/invoice-incomes-new.component';
import { InvoiceIncomesViewComponent } from './../../components/invoice-incomes/invoice-incomes-view/invoice-incomes-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceIncomesEditComponent } from 'src/app/components/invoice-incomes/invoice-incomes-edit/invoice-incomes-edit.component';

const routes: Routes = [
  {
    path: '', component: InvoiceIncomesListComponent, canActivate: [], children: [
      { path: 'new', component: InvoiceIncomesNewComponent },
      { path: ':id', component: InvoiceIncomesViewComponent, resolve: [] },
      { path: ':id/edit', component: InvoiceIncomesEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    InvoiceIncomesEditComponent,
    InvoiceIncomesViewComponent,
    InvoiceIncomesNewComponent,
    InvoiceIncomesListComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceIncomesRoutesModule {

}
