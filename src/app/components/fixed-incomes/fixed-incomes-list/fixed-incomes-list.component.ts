import { FixedIncomesService } from './../../../services/fixed-incomes.service';
import { FixedIncome } from './../../../models/fixed-income-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-fixed-incomes-list',
  templateUrl: './fixed-incomes-list.component.html',
  styleUrls: ['./fixed-incomes-list.component.scss']
})
export class FixedIncomesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'customerId', 'fundId', 'amount', 'payoutPeriod', 'day', 'frequency', 'startDate', 'endDate', 'poNumber', 'edit', 'delete'];
  dataset: MatTableDataSource<FixedIncome>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private fixedIncomesService: FixedIncomesService) {
  }

  ngOnInit() {
    const fixedIncomes = this.fixedIncomesService.getFixedIncomes();
    this.dataset = new MatTableDataSource<FixedIncome>(fixedIncomes);
    this.dataset.paginator = this.paginator;
  }
}
