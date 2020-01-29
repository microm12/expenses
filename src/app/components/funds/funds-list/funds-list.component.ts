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
  dataset = new MatTableDataSource<Fund>([
    new Fund("Tameio 1", "Peiraiws", "IBB982371123", "NO0978", 1900),
    new Fund("Tameio 2", "Ethniki", "ETH982371123", "NO0800", 1900, "test")
  ]);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataset.paginator = this.paginator;
  }

}
