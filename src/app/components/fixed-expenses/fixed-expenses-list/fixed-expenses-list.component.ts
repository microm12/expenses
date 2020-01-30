import { FixedExpensesService } from './../../../services/fixed-expenses.service';
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
  dataset: MatTableDataSource<FixedExpense>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private fixedExpensesService: FixedExpensesService) {
  }

  ngOnInit() {
    const fixedExpenses = this.fixedExpensesService.getFixedExpenses();
    this.dataset = new MatTableDataSource<FixedExpense>(fixedExpenses);
    this.dataset.paginator = this.paginator;
  }
}
