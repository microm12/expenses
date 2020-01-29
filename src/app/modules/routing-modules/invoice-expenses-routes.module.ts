import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceExpensesEditComponent } from 'src/app/components/invoice-expenses/invoice-expenses-edit/invoice-expenses-edit.component';
import { InvoiceExpensesListComponent } from 'src/app/components/invoice-expenses/invoice-expenses-list/invoice-expenses-list.component';
import { InvoiceExpensesNewComponent } from 'src/app/components/invoice-expenses/invoice-expenses-new/invoice-expenses-new.component';
import { InvoiceExpensesViewComponent } from 'src/app/components/invoice-expenses/invoice-expenses-view/invoice-expenses-view.component';

const routes: Routes = [
  {
    path: '', component: InvoiceExpensesListComponent, canActivate: [], children: [
      { path: 'new', component: InvoiceExpensesNewComponent },
      { path: ':id', component: InvoiceExpensesViewComponent, resolve: [] },
      { path: ':id/edit', component: InvoiceExpensesEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    InvoiceExpensesEditComponent,
    InvoiceExpensesListComponent,
    InvoiceExpensesNewComponent,
    InvoiceExpensesViewComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceExpensesRoutesModule {

}
