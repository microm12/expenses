import { Client } from './../../../models/client-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  dataset: Client[] = [
    new Client('Mark', 'mark@test.com', 'test'),
    new Client('John', 'john@test.com', 'test2', 'sample text'),
    new Client('Mary', 'mary@test.com', 'test3'),
    new Client('Jack', 'jack@test.com', 'test4', 'this is a test')
  ];
  displayedColumns: string[] = ['id', 'name', 'accEmail', 'edit', 'delete'];
  constructor() { }

  ngOnInit() {
  }

}
