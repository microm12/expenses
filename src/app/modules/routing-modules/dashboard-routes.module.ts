import { DashboardComponent } from './../../components/dashboard/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: []
  }];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutesModule {

}
