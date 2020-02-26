import { InvoiceExpense } from "./../models/invoice-expense-model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Transaction } from "../models/transaction";

@Injectable({
  providedIn: "root"
})
export class InvoiceExpensesService {
  invoiceExpensesChanged = new Subject<InvoiceExpense[]>();
  private invoiceExp: InvoiceExpense[] = [
    new InvoiceExpense(
      "Supplier 1",
      30,
      new Transaction([{ fundId: 5, amount: 700 }], '2020-01-20'),
      1
    ),
    new InvoiceExpense(
      "Supplier 2",
      25,
      new Transaction([{ fundId: 7, amount: 300 }], '2020-01-25'),
      3
    ),
    new InvoiceExpense(
      "Supplier 3",
      23,
      new Transaction([{ fundId: 4, amount: 512.2 }], '2020-01-31'),
      2
    ),
    new InvoiceExpense(
      "Supplier 4",
      14,
      new Transaction([{ fundId: 2, amount: 1200 }], '2020-02-01'),
      4
    )
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
    this.invoiceExp.map((invoiceExpense, index) => {
      if (invoiceExpense.id === id) {
        this.invoiceExp.splice(index, 1, newInvoiceExpense);
        this.invoiceExpensesChanged.next(this.invoiceExp);
      }
    });
  }

  deleteInvoiceExpense(id: number) {
    this.invoiceExp.map((invoiceExpense, index) => {
      if (invoiceExpense.id === id) {
        this.invoiceExp.splice(index, 1);
        this.invoiceExpensesChanged.next(this.invoiceExp);
      }
    });
  }
}
