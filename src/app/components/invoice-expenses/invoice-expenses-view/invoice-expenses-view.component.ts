import { Component, OnInit } from '@angular/core';
import { InvoiceExpense } from 'src/app/models/invoice-expense-model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InvoiceExpensesService } from 'src/app/services/invoice-expenses.service';

@Component({
  selector: 'app-invoice-expenses-view',
  templateUrl: './invoice-expenses-view.component.html',
  styleUrls: ['./invoice-expenses-view.component.scss']
})
export class InvoiceExpensesViewComponent implements OnInit {
  invoiceExpense: InvoiceExpense;
  invoiceExpenseId: number;
  constructor(private router: Router, private route: ActivatedRoute, private invoiceExpensesService: InvoiceExpensesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.invoiceExpenseId = +params.id;
      this.invoiceExpense = this.invoiceExpensesService.getInvoiceExpensesById(this.invoiceExpenseId);
    });
  }
}
