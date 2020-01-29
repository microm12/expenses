import { InvoiceIncomesListComponent } from './../../components/invoice-incomes/invoice-incomes-list/invoice-incomes-list.component';
import { InvoiceIncomesViewComponent } from './../../components/invoice-incomes/invoice-incomes-view/invoice-incomes-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceIncomesEditComponent } from 'src/app/components/invoice-incomes/invoice-incomes-edit/invoice-incomes-edit.component';

const routes: Routes = [
  {
    path: '', component: InvoiceIncomesListComponent, canActivate: [], children: [
      { path: 'new', component: InvoiceIncomesEditComponent },
      { path: ':id', component: InvoiceIncomesViewComponent, resolve: [] },
      { path: ':id/edit', component: InvoiceIncomesEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    InvoiceIncomesEditComponent,
    InvoiceIncomesViewComponent,
    InvoiceIncomesListComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceIncomesRoutesModule {

}
