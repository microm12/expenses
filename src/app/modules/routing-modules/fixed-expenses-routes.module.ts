import { FixedExpensesComponent } from './../../components/fixed-expenses/fixed-expenses.component';
import { FixedExpensesViewComponent } from './../../components/fixed-expenses/fixed-expenses-view/fixed-expenses-view.component';
import { FixedExpensesListComponent } from './../../components/fixed-expenses/fixed-expenses-list/fixed-expenses-list.component';
import { FixedExpensesEditComponent } from './../../components/fixed-expenses/fixed-expenses-edit/fixed-expenses-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: '', component: FixedExpensesComponent, canActivate: [], children: [
      { path: '', component: FixedExpensesListComponent },
      { path: 'new', component: FixedExpensesEditComponent },
      { path: ':id', component: FixedExpensesViewComponent, resolve: [] },
      { path: ':id/edit', component: FixedExpensesEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    FixedExpensesEditComponent,
    FixedExpensesListComponent,
    FixedExpensesViewComponent,
    FixedExpensesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixedExpensesRoutesModule {

}
