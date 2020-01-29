import { FundsNewComponent } from './../../components/funds/funds-new/funds-new.component';
import { FundsViewComponent } from './../../components/funds/funds-view/funds-view.component';
import { FundsListComponent } from './../../components/funds/funds-list/funds-list.component';
import { FundsEditComponent } from './../../components/funds/funds-edit/funds-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FundsListComponent, canActivate: [], children: [
      { path: 'new', component: FundsNewComponent },
      { path: ':id', component: FundsViewComponent, resolve: [] },
      { path: ':id/edit', component: FundsEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    FundsEditComponent,
    FundsListComponent,
    FundsViewComponent,
    FundsNewComponent

  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundRoutesModule {

}
