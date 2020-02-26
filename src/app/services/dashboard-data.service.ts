import { InvoiceExpense } from 'src/app/models/invoice-expense-model';
import { InvoiceIncome } from 'src/app/models/invoice-income-model';
import { InvoiceExpensesService } from 'src/app/services/invoice-expenses.service';
import { InvoiceIncomesService } from 'src/app/services/invoice-incomes.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {
  allIncomes: InvoiceIncome[];
  allExpenses: InvoiceExpense[];


  constructor(private invoiceIncomeService: InvoiceIncomesService, private invoiceExpensesService: InvoiceExpensesService) { }

  getFundIcomes(date?: string, fundId?: number) {
    this.invoiceIncomeService.invoiceIncomesChanged.subscribe(incomes => {
      this.allIncomes = incomes.filter(income => {
        if (date) {
          return (income.transaction.date === date);
        } else if (fundId) {
          return (income.transaction.accountTransactions.filter(trans => trans.fundId === fundId));
        } else {
          return income.transaction.date;
        }
      });
    });
    this.invoiceIncomeService.getInvoiceIncomes();
    return this.allIncomes;
  }

  getFundExpenses(date?: string, fundId?: number) {
    this.invoiceExpensesService.invoiceExpensesChanged.subscribe(epxenses => {
      this.allExpenses = epxenses.filter(expense => {
        if (date) {
          return (expense.transaction.date === date);
        } else if (fundId) {
          return (expense.transaction.accountTransactions.filter(trans => trans.fundId === fundId));
        } else {
          return expense.transaction.date;
        }
      });
    });
    this.invoiceExpensesService.getInvoiceExpenses();
    return this.allExpenses;
  }


}
