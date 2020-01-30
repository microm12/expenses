import { InvoiceExpense } from './../models/invoice-expense-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceExpensesService {
  private invoiceExp: InvoiceExpense[] = [
    new InvoiceExpense('Supplier 1', 1, 5, 700, 30),
    new InvoiceExpense('Supplier 2', 3, 7, 300, 25),
    new InvoiceExpense('Supplier 3', 45, 23, 512.2, 25),
    new InvoiceExpense('Supplier 4', 52, 14, 1200, 14)
  ];

  constructor() { }

  getInvoiceExpenses() {
    return this.invoiceExp;
  }

  getInvoiceExpensesById(id: number): InvoiceExpense {
    for (const foundInvoiceExp of this.invoiceExp) {
      if (foundInvoiceExp.id === id) {
        return foundInvoiceExp;
      }
    }
  }

}
