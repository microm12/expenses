import { InvoiceIncome } from './../models/invoice-income-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceIncomesService {
  private invoiceIn: InvoiceIncome[] = [
    new InvoiceIncome('Client 1', 1, 5, 700, 30),
    new InvoiceIncome('Client 2', 3, 7, 300, 25),
    new InvoiceIncome('Client 3', 45, 23, 512.2, 25),
    new InvoiceIncome('Client 4', 52, 14, 1200, 14)
  ];

  constructor() { }

  getInvoiceIncomes() {
    return this.invoiceIn;
  }

  getInvoiceIncomesById(id: number): InvoiceIncome {
    for (const foundInvoiceIn of this.invoiceIn) {
      if (foundInvoiceIn.id === id) {
        return foundInvoiceIn;
      }
    }
  }

}
