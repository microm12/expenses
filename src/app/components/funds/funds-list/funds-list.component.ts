import { Fund } from './../../../models/fund-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funds-list',
  templateUrl: './funds-list.component.html',
  styleUrls: ['./funds-list.component.scss']
})
export class FundsListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'bank', 'iban', 'accNumber', 'edit', 'delete'];
  dataset: Fund[] = [
    new Fund("Tameio 1", "Peiraiws", "IBB982371123", "NO0978", 1900),
    new Fund("Tameio 2", "Ethniki", "ETH982371123", "NO0800", 1900, "test")
  ];

  constructor() { }

  ngOnInit() {
  }

}
