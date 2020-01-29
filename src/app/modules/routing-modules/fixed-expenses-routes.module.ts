import { FixedExpensesViewComponent } from './../../components/fixed-expenses/fixed-expenses-view/fixed-expenses-view.component';
import { FixedExpensesListComponent } from './../../components/fixed-expenses/fixed-expenses-list/fixed-expenses-list.component';
import { FixedExpensesEditComponent } from './../../components/fixed-expenses/fixed-expenses-edit/fixed-expenses-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FixedExpensesListComponent, pathMatch: 'full', canActivate: [], children: [
      { path: 'new', component: FixedExpensesEditComponent },
      { path: ':id', component: FixedExpensesViewComponent, resolve: [] },
      { path: ':id/edit', component: FixedExpensesEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    FixedExpensesEditComponent,
    FixedExpensesListComponent,
    FixedExpensesViewComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixedExpensesRoutesModule {

}
