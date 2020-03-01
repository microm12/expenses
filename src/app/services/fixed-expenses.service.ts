import { Injectable } from '@angular/core';
import { FixedExpense } from '../models/fixed-expense-model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FixedExpensesService {
  fixedExpensesChanged = new Subject<FixedExpense[]>();
  private fixedExpenses: FixedExpense[] = [
    new FixedExpense('Supplier A', 1, 700, 30, '1st day of the month', 1, new Date('01-20-2020'), new Date('05-23-2020'), 1, 'Not my BDay'),
    new FixedExpense('Supplier B', 2, 300, 25, 'Last day of the month ', 2, new Date('02-09-2020'), new Date('07-30-2021'), 3),
    new FixedExpense('Supplier E', 3, 512.2, 25, '25th', 3, new Date('01-10-2019'), new Date('05-24-2019'), 45, 'Sample Date'),
    new FixedExpense('Supplier Z', 4, 1200, 14, '15th', 1, new Date('08-27-2018'), new Date('01-20-2020'), 52)
  ];

  constructor() { }

  getFixedExpenses() {
    this.fixedExpensesChanged.next(this.fixedExpenses);
  }

  getFixedExpenseById(id: number): FixedExpense {
    for (const foundFixedExpenses of this.fixedExpenses) {
      if (foundFixedExpenses.id === id) {
        return foundFixedExpenses;
      }
    }
  }

  addFixedExpense(newFixedExpense: FixedExpense) {
    this.fixedExpenses.push(newFixedExpense);
    this.fixedExpensesChanged.next(this.fixedExpenses);
  }

  updateFixedExpense(id: number, newFixedExpense: FixedExpense) {
    this.fixedExpenses.map((fixedExpense, index) => {
      if (fixedExpense.id === id) {
        this.fixedExpenses.splice(index, 1, newFixedExpense);
        this.fixedExpensesChanged.next(this.fixedExpenses);
      }
    });
  }

  deleteFixedExpense(id: number) {
    this.fixedExpenses.map((fixedExpense, index) => {
      if (fixedExpense.id === id) {
        this.fixedExpenses.splice(index, 1);
        this.fixedExpensesChanged.next(this.fixedExpenses);
      }
    });
  }

}
