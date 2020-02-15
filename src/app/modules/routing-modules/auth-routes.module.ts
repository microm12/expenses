import { LoginComponent } from './../../components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';

const routes: Routes = [
  {
    path: '', component: LoginComponent, canActivate: []
  }];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutesModule {

}
