import { SuppliersService } from './../../../services/suppliers.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Supplier } from 'src/app/models/supplier-model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { PopupComponent } from '../../shared/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss']
})
export class SuppliersListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'contactEmail', 'edit', 'delete'];
  dataset: MatTableDataSource<Supplier>;
  subscription: Subscription;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private suppliersService: SuppliersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.subscription = this.suppliersService.suppliersChanged.subscribe(suppliers => {
      this.dataset = new MatTableDataSource<Supplier>(suppliers);
      this.dataset.paginator = this.paginator;
    });
    this.suppliersService.getSuppliers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(id: number) {
    this.suppliersService.deleteSupplier(id);
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
