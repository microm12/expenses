import { InvoiceExpensesService } from './../../../services/invoice-expenses.service';
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
  dataset: MatTableDataSource<InvoiceExpense>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private invoiceExpensesService: InvoiceExpensesService) {
  }

  ngOnInit() {
    const invoiceExpenses = this.invoiceExpensesService.getInvoiceExpenses();
    this.dataset = new MatTableDataSource<InvoiceExpense>(invoiceExpenses);
    this.dataset.paginator = this.paginator;
  }
}
