import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', loadChildren: './modules/routing-modules/auth-routes.module#AuthRoutesModule' },
  { path: 'dashboard', loadChildren: './modules/routing-modules/dashboard-routes.module#DashboardRoutesModule' },
  { path: 'clients', loadChildren: './modules/routing-modules/client-routes.module#ClientRoutesModule' },
  { path: 'suppliers', loadChildren: './modules/routing-modules/supplier-routes.module#SupplierRoutesModule' },
  { path: 'funds', loadChildren: './modules/routing-modules/fund-routes.module#FundRoutesModule' },
  { path: 'fixed-expenses', loadChildren: './modules/routing-modules/fixed-expenses-routes.module#FixedExpensesRoutesModule' },
  { path: 'fixed-incomes', loadChildren: './modules/routing-modules/fixed-incomes-routes.module#FixedIncomesRoutesModule' },
  { path: 'invoice-incomes', loadChildren: './modules/routing-modules/invoice-incomes-routes.module#InvoiceIncomesRoutesModule' },
  { path: 'invoice-expenses', loadChildren: './modules/routing-modules/invoice-expenses-routes.module#InvoiceExpensesRoutesModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
