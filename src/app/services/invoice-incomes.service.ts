import { InvoiceIncome } from './../models/invoice-income-model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class InvoiceIncomesService {
  invoiceIncomesChanged = new Subject<InvoiceIncome[]>();
  private invoiceIn: InvoiceIncome[] = [
    new InvoiceIncome(
      'Client 1',
      1,
      30,
      new Transaction([{ fundId: 5, amount: 700 }], '2020-01-18')
    ),
    new InvoiceIncome(
      'Client 2',
      3,
      25,
      new Transaction([{ fundId: 7, amount: 300 }], '2020-01-25')
    ),
    new InvoiceIncome(
      'Client 3',
      45,
      25,
      new Transaction([{ fundId: 4, amount: 512.2 }], '2020-01-31')
    ),
    new InvoiceIncome(
      'Client 4',
      52,
      14,
      new Transaction([{ fundId: 2, amount: 1200 }], '2020-02-01')
    )
  ];

  constructor() { }

  getInvoiceIncomes() {
    this.invoiceIncomesChanged.next(this.invoiceIn);
  }

  getInvoiceIncomesById(id: number): InvoiceIncome {
    for (const foundInvoiceIn of this.invoiceIn) {
      if (foundInvoiceIn.id === id) {
        return foundInvoiceIn;
      }
    }
  }

  addInvoiceIncome(newInvoiceIncome: InvoiceIncome) {
    this.invoiceIn.push(newInvoiceIncome);
    this.invoiceIncomesChanged.next(this.invoiceIn);
  }

  updateInvoiceIncome(id: number, newInvoiceIncome: InvoiceIncome) {
    this.invoiceIn.map((invoiceIncome, index) => {
      if (invoiceIncome.id === id) {
        this.invoiceIn.splice(index, 1, newInvoiceIncome);
        this.invoiceIncomesChanged.next(this.invoiceIn);
      }
    });
  }

  deleteInvoiceIncome(id: number) {
    this.invoiceIn.map((invoiceIncome, index) => {
      if (invoiceIncome.id === id) {
        this.invoiceIn.splice(index, 1);
        this.invoiceIncomesChanged.next(this.invoiceIn);
      }
    });
  }
}
