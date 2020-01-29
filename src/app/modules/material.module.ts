import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

const array = [
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatPaginatorModule
];

@NgModule({
  imports: array,
  exports: array
})
export class MaterialModule { }
