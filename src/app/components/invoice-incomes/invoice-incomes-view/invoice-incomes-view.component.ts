import { Component, OnInit } from '@angular/core';
import { InvoiceIncome } from 'src/app/models/invoice-income-model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InvoiceIncomesService } from 'src/app/services/invoice-incomes.service';

@Component({
  selector: 'app-invoice-incomes-view',
  templateUrl: './invoice-incomes-view.component.html',
  styleUrls: ['./invoice-incomes-view.component.scss']
})
export class InvoiceIncomesViewComponent implements OnInit {
  invoiceIncome: InvoiceIncome;
  invoiceIncomeId: number;
  constructor(private router: Router, private route: ActivatedRoute, private invoiceIncomesService: InvoiceIncomesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.invoiceIncomeId = +params.id;
      this.invoiceIncome = this.invoiceIncomesService.getInvoiceIncomesById(this.invoiceIncomeId);
    });
  }

}
