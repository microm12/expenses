import { Fund } from './../models/fund-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  private funds: Fund[] = [
    new Fund('Tameio 1', 'Peiraiws', 'IBB982371123', 'NO0978', 1900),
    new Fund('Tameio 2', 'Ethniki', 'ETH982371123', 'NO0800', 1900, 'test')
  ];

  constructor() { }

  getFunds() {
    return this.funds;
  }

  getClientById(id: number): Fund {
    for (const foundFund of this.funds) {
      if (foundFund.id === id) {
        return foundFund;
      }
    }
  }

}
