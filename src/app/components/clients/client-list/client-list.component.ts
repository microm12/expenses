import { Client } from './../../../models/client-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'accEmail', 'edit', 'delete'];
  dataset = new MatTableDataSource<Client>([
    new Client('Mark', 'mark@test.com', 'test'),
    new Client('John', 'john@test.com', 'test2', 'sample text'),
    new Client('Mary', 'mary@test.com', 'test3'),
    new Client('Jack', 'jack@test.com', 'test4', 'this is a test')
  ]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() {
  }

  ngOnInit() {
    this.dataset.paginator = this.paginator;
  }

}
