import { InvoiceIncome } from './../models/invoice-income-model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceIncomesService {
  invoiceIncomesChanged = new Subject<InvoiceIncome[]>();
  private invoiceIn: InvoiceIncome[] = [
    new InvoiceIncome('Client 1', 1, 5, 700, 30),
    new InvoiceIncome('Client 2', 3, 7, 300, 25),
    new InvoiceIncome('Client 3', 45, 23, 512.2, 25),
    new InvoiceIncome('Client 4', 52, 14, 1200, 14)
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
