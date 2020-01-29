import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const array = [
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule
];

@NgModule({
  imports: array,
  exports: array
})
export class MaterialModule { }
