import { Client } from './../../../models/client-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'accEmail', 'edit', 'delete'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataset: MatTableDataSource<Client>;

  constructor(private clientsService: ClientsService) {
  }

  ngOnInit() {
    const clients = this.clientsService.getClients();
    this.dataset = new MatTableDataSource<Client>(clients);
    this.dataset.paginator = this.paginator;
  }

}
