import { FundsService } from './../../../services/funds.service';
import { Fund } from './../../../models/fund-model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

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

  constructor(private fundsService: FundsService) { }

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

}
