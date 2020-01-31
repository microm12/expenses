import { Fund } from './../models/fund-model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundsService {
  fundsChanged = new Subject<Fund[]>();
  private funds: Fund[] = [
    new Fund('Tameio 1', 'Peiraiws', 'IBB982371123', 'NO0978', 1900),
    new Fund('Tameio 2', 'Ethniki', 'ETH982371123', 'NO0800', 1900, 'test')
  ];

  constructor() { }

  getFunds() {
    this.fundsChanged.next(this.funds);
  }

  getFundById(id: number): Fund {
    for (const foundFund of this.funds) {
      if (foundFund.id === id) {
        return foundFund;
      }
    }
  }

  addFund(newFund: Fund) {
    this.funds.push(newFund);
    this.fundsChanged.next(this.funds);
  }

  updateFund(id: number, newFund: Fund) {
    for (let fund of this.funds) {
      if (fund.id === id) {
        let index = this.funds.indexOf(fund);
        this.funds.splice(index, 1, newFund);
        this.fundsChanged.next(this.funds);
      }
    }
  }

  deleteFund(id: number) {
    for (let fund of this.funds) {
      if (fund.id === id) {
        let index = this.funds.indexOf(fund);
        this.funds.splice(index, 1);
        this.fundsChanged.next(this.funds);
      }
    }
  }
}
