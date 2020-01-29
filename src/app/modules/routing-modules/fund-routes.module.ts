import { FundsViewComponent } from './../../components/funds/funds-view/funds-view.component';
import { FundsListComponent } from './../../components/funds/funds-list/funds-list.component';
import { FundsEditComponent } from './../../components/funds/funds-edit/funds-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FundsComponent } from 'src/app/components/funds/funds';

const routes: Routes = [
  {
    path: '', component: FundsComponent, canActivate: [], children: [
      { path: '', component: FundsListComponent },
      { path: 'new', component: FundsEditComponent },
      { path: ':id', component: FundsViewComponent, resolve: [] },
      { path: ':id/edit', component: FundsEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    FundsEditComponent,
    FundsListComponent,
    FundsViewComponent,
    FundsComponent

  ],
  imports: [
    MaterialModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundRoutesModule {

}
