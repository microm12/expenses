import { FundsService } from './../../../services/funds.service';
import { Fund } from './../../../models/fund-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-funds-list',
  templateUrl: './funds-list.component.html',
  styleUrls: ['./funds-list.component.scss']
})
export class FundsListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'bank', 'iban', 'accNumber', 'edit', 'delete'];
  dataset: MatTableDataSource<Fund>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private fundsService: FundsService) { }

  ngOnInit() {
    const funds = this.fundsService.getFunds();
    this.dataset = this.dataset = new MatTableDataSource<Fund>(funds);
    this.dataset.paginator = this.paginator;
  }

}
