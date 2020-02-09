import { FixedExpensesService } from './../../../services/fixed-expenses.service';
import { FixedExpense } from './../../../models/fixed-expense-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../../shared/popup/popup.component';

@Component({
  selector: 'app-fixed-expenses-list',
  templateUrl: './fixed-expenses-list.component.html',
  styleUrls: ['./fixed-expenses-list.component.scss']
})
export class FixedExpensesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'supplierId', 'fundId', 'amount', 'payoutPeriod', 'day', 'frequency', 'startDate', 'endDate', 'poNumber', 'edit', 'delete'];
  dataset: MatTableDataSource<FixedExpense>;
  subscription: Subscription;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private fixedExpensesService: FixedExpensesService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.subscription = this.fixedExpensesService.fixedExpensesChanged.subscribe(fixedExpenses => {
      this.dataset = new MatTableDataSource<FixedExpense>(fixedExpenses);
      this.dataset.paginator = this.paginator;
    });
    this.fixedExpensesService.getFixedExpenses();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(id: number) {
    this.fixedExpensesService.deleteFixedExpense(id);
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
