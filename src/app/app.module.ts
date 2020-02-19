import { PopupComponent } from './components/shared/popup/popup.component';
import { MaterialModule } from './modules/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditPopupComponent } from './components/dashboard/edit-popup/edit-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PopupComponent,
    EditPopupComponent
  ],
  entryComponents: [PopupComponent, EditPopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
