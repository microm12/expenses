import { InvoiceExpense } from 'src/app/models/invoice-expense-model';
import { InvoiceIncome } from 'src/app/models/invoice-income-model';
import { DashboardDataService } from './../../../services/dashboard-data.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Fund } from 'src/app/models/fund-model';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.scss']
})
export class EditPopupComponent implements OnInit {
  funds: Fund[];
  incomes: InvoiceIncome[];
  expenses: InvoiceExpense[];


  constructor(@Inject(MAT_DIALOG_DATA) public data: { date: any; },
    private dashboardDataService: DashboardDataService) { }

  ngOnInit() {
    this.incomes = this.dashboardDataService.getFundIcomes(this.data.date);
    this.expenses = this.dashboardDataService.getFundExpenses(this.data.date);

  }

}
