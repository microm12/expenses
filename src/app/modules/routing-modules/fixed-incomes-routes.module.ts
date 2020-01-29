import { FixedIncomesViewComponent } from './../../components/fixed-incomes/fixed-incomes-view/fixed-incomes-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedIncomesEditComponent } from 'src/app/components/fixed-incomes/fixed-incomes-edit/fixed-incomes-edit.component';
import { FixedIncomesListComponent } from 'src/app/components/fixed-incomes/fixed-incomes-list/fixed-incomes-list.component';

const routes: Routes = [
  {
    path: '', component: FixedIncomesListComponent, pathMatch: 'full', canActivate: [], children: [
      { path: 'new', component: FixedIncomesEditComponent },
      { path: ':id', component: FixedIncomesViewComponent, resolve: [] },
      { path: ':id/edit', component: FixedIncomesEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    FixedIncomesEditComponent,
    FixedIncomesListComponent,
    FixedIncomesViewComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixedIncomesRoutesModule {

}
