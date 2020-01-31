import { Client } from './../../../models/client-model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClientsService } from 'src/app/services/clients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'accEmail', 'edit', 'delete'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataset: MatTableDataSource<Client>;
  subscription: Subscription;

  constructor(private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.subscription = this.clientsService.clientsChanged.subscribe(clients => {
      this.dataset = new MatTableDataSource<Client>(clients);
      this.dataset.paginator = this.paginator;
    });
    this.clientsService.getClients();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(id: number) {
    this.clientsService.deleteClient(id);
  }

}
