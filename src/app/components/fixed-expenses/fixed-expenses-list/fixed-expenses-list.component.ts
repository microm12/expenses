import { FixedExpense } from './../../../models/fixed-expense-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-fixed-expenses-list',
  templateUrl: './fixed-expenses-list.component.html',
  styleUrls: ['./fixed-expenses-list.component.scss']
})
export class FixedExpensesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'supplierId', 'fundId', 'amount', 'payoutPeriod', 'day', 'frequency', 'startDate', 'endDate', 'poNumber', 'edit', 'delete'];
  dataset = new MatTableDataSource<FixedExpense>([
    new FixedExpense('Supplier A', 1, 5, 700, 30, '1st day of the month', 1, new Date('01-20-2020'), new Date('05-23-2020'), 'Not my BDay'),
    new FixedExpense('Supplier B', 3, 7, 300, 25, 'Last day of the month ', 2, new Date('02-09-2020'), new Date('07-30-2021')),
    new FixedExpense('Supplier E', 45, 23, 512.2, 25, '25th', 3, new Date('01-10-2019'), new Date('05-24-2019'), 'Sample Date'),
    new FixedExpense('Supplier Z', 52, 14, 1200, 14, '15th', 1, new Date('08-27-2018'), new Date('01-20-2020'))
  ]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() {
  }

  ngOnInit() {
    this.dataset.paginator = this.paginator;
  }
}
