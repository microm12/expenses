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

  getFundIcomes(date: string) {
    this.invoiceIncomeService.invoiceIncomesChanged.subscribe(incomes => {
      this.allIncomes = incomes.filter(income => {
        return (income.transaction.date === date);
      });
    });
    this.invoiceIncomeService.getInvoiceIncomes();
    return this.allIncomes;
  }

  getFundExpenses(date: string) {
    this.invoiceExpensesService.invoiceExpensesChanged.subscribe(epxenses => {
      this.allExpenses = epxenses.filter(expense => {
        return (expense.transaction.date === date);
      });
    });
    this.invoiceExpensesService.getInvoiceExpenses();
    return this.allExpenses;
  }

}
