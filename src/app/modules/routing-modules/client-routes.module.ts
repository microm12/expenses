import { MaterialModule } from './../material.module';
import { ClientViewComponent } from './../../components/clients/client-view/client-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from 'src/app/components/clients/client-list/client-list.component';
import { ClientEditComponent } from 'src/app/components/clients/client-edit/client-edit.component';
import { ClientComponent } from 'src/app/components/clients/clients.component';

const routes: Routes = [
  {
    path: '', component: ClientComponent, canActivate: [], children: [
      { path: '', component: ClientListComponent },
      { path: 'new', component: ClientEditComponent },
      { path: ':id', component: ClientViewComponent, resolve: [] },
      { path: ':id/edit', component: ClientEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    ClientListComponent,
    ClientViewComponent,
    ClientEditComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutesModule {

}
