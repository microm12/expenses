import { DashboardComponent } from './../../components/dashboard/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: []
  }];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PlotlyModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutesModule {

}
