import { FixedIncomesViewComponent } from './../../components/fixed-incomes/fixed-incomes-view/fixed-incomes-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FixedIncomesEditComponent } from 'src/app/components/fixed-incomes/fixed-incomes-edit/fixed-incomes-edit.component';
import { FixedIncomesListComponent } from 'src/app/components/fixed-incomes/fixed-incomes-list/fixed-incomes-list.component';
import { MaterialModule } from '../material.module';
import { FixedIncomesComponent } from 'src/app/components/fixed-incomes/fixed-incomes.component';

const routes: Routes = [
  {
    path: '', component: FixedIncomesComponent, canActivate: [], children: [
      { path: '', component: FixedIncomesListComponent },
      { path: 'new', component: FixedIncomesEditComponent },
      { path: ':id', component: FixedIncomesViewComponent, resolve: [] },
      { path: ':id/edit', component: FixedIncomesEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    FixedIncomesEditComponent,
    FixedIncomesListComponent,
    FixedIncomesViewComponent,
    FixedIncomesComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixedIncomesRoutesModule {

}
