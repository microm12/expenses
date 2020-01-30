import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

const array = [
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatPaginatorModule,
  MatCardModule,
  MatListModule
];

@NgModule({
  imports: array,
  exports: array
})
export class MaterialModule { }
