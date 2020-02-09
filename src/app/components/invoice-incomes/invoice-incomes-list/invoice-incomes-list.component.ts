import { InvoiceIncomesService } from './../../../services/invoice-incomes.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { InvoiceIncome } from 'src/app/models/invoice-income-model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../../shared/popup/popup.component';

@Component({
  selector: 'app-invoice-incomes-list',
  templateUrl: './invoice-incomes-list.component.html',
  styleUrls: ['./invoice-incomes-list.component.scss']
})
export class InvoiceIncomesListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'customerId', 'fundId', 'amount', 'payoutPeriod', 'edit', 'delete'];
  dataset: MatTableDataSource<InvoiceIncome>;
  subscription: Subscription;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private invoiceIncomesService: InvoiceIncomesService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.subscription = this.invoiceIncomesService.invoiceIncomesChanged.subscribe(invoiceIncomes => {
      this.dataset = new MatTableDataSource<InvoiceIncome>(invoiceIncomes);
      this.dataset.paginator = this.paginator;
    });
    this.invoiceIncomesService.getInvoiceIncomes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(id: number) {
    this.invoiceIncomesService.deleteInvoiceIncome(id);
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
