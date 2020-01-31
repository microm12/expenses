import { InvoiceExpense } from './../models/invoice-expense-model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceExpensesService {
  invoiceExpensesChanged = new Subject<InvoiceExpense[]>();
  private invoiceExp: InvoiceExpense[] = [
    new InvoiceExpense('Supplier 1', 5, 700, 30, 1),
    new InvoiceExpense('Supplier 2', 7, 300, 25, 3),
    new InvoiceExpense('Supplier 3', 23, 512.2, 25, 45),
    new InvoiceExpense('Supplier 4', 14, 1200, 14, 52)
  ];

  constructor() { }

  getInvoiceExpenses() {
    this.invoiceExpensesChanged.next(this.invoiceExp);
  }

  getInvoiceExpensesById(id: number): InvoiceExpense {
    for (const foundInvoiceExp of this.invoiceExp) {
      if (foundInvoiceExp.id === id) {
        return foundInvoiceExp;
      }
    }
  }

  addInvoiceExpense(newInvoiceExpense: InvoiceExpense) {
    this.invoiceExp.push(newInvoiceExpense);
    this.invoiceExpensesChanged.next(this.invoiceExp);
  }

  updateInvoiceExpense(id: number, newInvoiceExpense: InvoiceExpense) {
    for (let invoiceExpense of this.invoiceExp) {
      if (invoiceExpense.id === id) {
        let index = this.invoiceExp.indexOf(invoiceExpense);
        this.invoiceExp.splice(index, 1, newInvoiceExpense);
        this.invoiceExpensesChanged.next(this.invoiceExp);
      }
    }
  }

  deleteInvoiceExpense(id: number) {
    for (let invoiceExpense of this.invoiceExp) {
      if (invoiceExpense.id === id) {
        let index = this.invoiceExp.indexOf(invoiceExpense);
        this.invoiceExp.splice(index, 1);
        this.invoiceExpensesChanged.next(this.invoiceExp);
      }
    }
  }
}
