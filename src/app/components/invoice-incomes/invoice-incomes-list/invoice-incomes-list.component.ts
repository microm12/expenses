import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { InvoiceIncome } from 'src/app/models/invoice-income-model';

@Component({
  selector: 'app-invoice-incomes-list',
  templateUrl: './invoice-incomes-list.component.html',
  styleUrls: ['./invoice-incomes-list.component.scss']
})
export class InvoiceIncomesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'customerId', 'fundId', 'amount', 'payoutPeriod', 'edit', 'delete'];
  dataset = new MatTableDataSource<InvoiceIncome>([
    new InvoiceIncome('Client 1', 1, 5, 700, 30),
    new InvoiceIncome('Client 2', 3, 7, 300, 25),
    new InvoiceIncome('Client 3', 45, 23, 512.2, 25),
    new InvoiceIncome('Client 4', 52, 14, 1200, 14)
  ]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() {
  }

  ngOnInit() {
    this.dataset.paginator = this.paginator;
  }
}
