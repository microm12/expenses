import { FundsService } from './../../../services/funds.service';
import { Fund } from './../../../models/fund-model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { PopupComponent } from '../../shared/popup/popup.component';

@Component({
  selector: 'app-funds-list',
  templateUrl: './funds-list.component.html',
  styleUrls: ['./funds-list.component.scss']
})
export class FundsListComponent implements OnInit, OnDestroy {
  displayedColumns = ['id', 'name', 'bank', 'iban', 'accNumber', 'edit', 'delete'];
  dataset: MatTableDataSource<Fund>;
  subscription: Subscription;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private fundsService: FundsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.subscription = this.fundsService.fundsChanged.subscribe(funds => {
      this.dataset = new MatTableDataSource<Fund>(funds);
      this.dataset.paginator = this.paginator;
    });
    this.fundsService.getFunds();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDelete(id: number) {
    this.fundsService.deleteFund(id);
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
