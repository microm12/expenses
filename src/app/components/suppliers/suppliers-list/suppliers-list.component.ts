import { Component, OnInit, ViewChild } from '@angular/core';
import { Supplier } from 'src/app/models/supplier-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss']
})
export class SuppliersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'contactEmail', 'edit', 'delete'];
  dataset = new MatTableDataSource<Supplier>([
    new Supplier('Mark', 'mark@test.com', 'test'),
    new Supplier('John', 'john@test.com'),
    new Supplier('Mary', 'mary@test.com', 'test3')
  ]);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataset.paginator = this.paginator;
  }

}
