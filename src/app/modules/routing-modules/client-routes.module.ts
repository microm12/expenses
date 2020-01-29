import { MaterialModule } from './../material.module';
import { ClientViewComponent } from './../../components/clients/client-view/client-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from 'src/app/components/clients/client-list/client-list.component';
import { ClientEditComponent } from 'src/app/components/clients/client-edit/client-edit.component';

const routes: Routes = [
  {
    path: '', component: ClientListComponent, canActivate: [], children: [
      { path: 'new', component: ClientEditComponent },
      { path: ':id', component: ClientViewComponent, resolve: [] },
      { path: ':id/edit', component: ClientEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    ClientListComponent,
    ClientViewComponent,
    ClientEditComponent
  ],
  imports: [
    MaterialModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutesModule {

}
