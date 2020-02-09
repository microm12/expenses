import { InvoiceExpensesService } from './../../../services/invoice-expenses.service';
import { InvoiceExpense } from './../../../models/invoice-expense-model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../../shared/popup/popup.component';

@Component({
  selector: 'app-invoice-expenses-list',
  templateUrl: './invoice-expenses-list.component.html',
  styleUrls: ['./invoice-expenses-list.component.scss']
})
export class InvoiceExpensesListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'supplierId', 'fundId', 'amount', 'payoutPeriod', 'edit', 'delete'];
  dataset: MatTableDataSource<InvoiceExpense>;
  subscription: Subscription;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private invoiceExpensesService: InvoiceExpensesService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.subscription = this.invoiceExpensesService.invoiceExpensesChanged.subscribe(invoiceExpenses => {
      this.dataset = new MatTableDataSource<InvoiceExpense>(invoiceExpenses);
      this.dataset.paginator = this.paginator;
    });
    this.invoiceExpensesService.getInvoiceExpenses();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(id: number) {
    this.invoiceExpensesService.deleteInvoiceExpense(id);
  }

  openDialog(id: number): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '30%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.onDelete(id);
      }
    });
  }
}
