import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/supplier-model';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss']
})
export class SuppliersListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'contactEmail', 'edit', 'delete'];
  dataset: Supplier[] = [
    new Supplier('Mark', 'mark@test.com', 'test'),
    new Supplier('John', 'john@test.com'),
    new Supplier('Mary', 'mary@test.com', 'test3')
  ];

  constructor() { }

  ngOnInit() {
  }

}
