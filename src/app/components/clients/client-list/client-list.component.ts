import { PopupComponent } from './../../shared/popup/popup.component';
import { Client } from './../../../models/client-model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClientsService } from 'src/app/services/clients.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private clientsService: ClientsService, public dialog: MatDialog) {
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

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.onDelete(id);
      }
    });
  }

}
