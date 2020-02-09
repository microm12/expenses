import { FixedIncomesService } from './../../../services/fixed-incomes.service';
import { FixedIncome } from './../../../models/fixed-income-model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../../shared/popup/popup.component';

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
  constructor(private fixedIncomesService: FixedIncomesService, public dialog: MatDialog) {
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
