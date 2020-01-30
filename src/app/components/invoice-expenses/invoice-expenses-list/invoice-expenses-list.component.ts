import { InvoiceExpense } from './../../../models/invoice-expense-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-invoice-expenses-list',
  templateUrl: './invoice-expenses-list.component.html',
  styleUrls: ['./invoice-expenses-list.component.scss']
})
export class InvoiceExpensesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'supplierId', 'fundId', 'amount', 'payoutPeriod', 'edit', 'delete'];
  dataset = new MatTableDataSource<InvoiceExpense>([
    new InvoiceExpense('Supplier 1', 1, 5, 700, 30),
    new InvoiceExpense('Supplier 2', 3, 7, 300, 25),
    new InvoiceExpense('Supplier 3', 45, 23, 512.2, 25),
    new InvoiceExpense('Supplier 4', 52, 14, 1200, 14)
  ]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() {
  }

  ngOnInit() {
    this.dataset.paginator = this.paginator;
  }
}
