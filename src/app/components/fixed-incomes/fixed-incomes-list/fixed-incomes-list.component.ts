import { FixedIncomesService } from './../../../services/fixed-incomes.service';
import { FixedIncome } from './../../../models/fixed-income-model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fixed-incomes-list',
  templateUrl: './fixed-incomes-list.component.html',
  styleUrls: ['./fixed-incomes-list.component.scss']
})
export class FixedIncomesListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'name', 'customerId', 'fundId', 'amount', 'payoutPeriod', 'day', 'frequency', 'startDate', 'endDate', 'poNumber', 'edit', 'delete'];
  dataset: MatTableDataSource<FixedIncome>;
  subscription: Subscription;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private fixedIncomesService: FixedIncomesService) {
  }

  ngOnInit() {
    this.subscription = this.fixedIncomesService.fixedIncomesChanged.subscribe(fixedIncomes => {
      this.dataset = new MatTableDataSource<FixedIncome>(fixedIncomes);
      this.dataset.paginator = this.paginator;
    });
    this.fixedIncomesService.getFixedIncomes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(id: number) {
    this.fixedIncomesService.deleteFixedIncome(id);
  }
}
