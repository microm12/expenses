import { ClientViewComponent } from './../../components/clients/client-view/client-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from 'src/app/components/clients/client-list/client-list.component';
import { ClientNewComponent } from 'src/app/components/clients/client-new/client-new.component';
import { ClientEditComponent } from 'src/app/components/clients/client-edit/client-edit.component';

const routes: Routes = [
  {
    path: '', component: ClientListComponent, canActivate: [], children: [
      { path: 'new', component: ClientNewComponent },
      { path: ':id', component: ClientViewComponent, resolve: [] },
      { path: ':id/edit', component: ClientEditComponent, resolve: [] }
    ]
  }];

@NgModule({
  declarations: [
    ClientListComponent,
    ClientNewComponent,
    ClientViewComponent,
    ClientEditComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutesModule {

}
