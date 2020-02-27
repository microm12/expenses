import { FundsService } from 'src/app/services/funds.service';
import { InvoiceExpense } from 'src/app/models/invoice-expense-model';
import { InvoiceIncome } from 'src/app/models/invoice-income-model';
import { DashboardDataService } from './../../../services/dashboard-data.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.scss']
})
export class EditPopupComponent implements OnInit {
  form: FormGroup;
  fundIdList: number[];
  incomes: InvoiceIncome[];
  expenses: InvoiceExpense[];


  constructor(@Inject(MAT_DIALOG_DATA) public data: { date: any; },
    public dialogRef: MatDialogRef<EditPopupComponent>,
    private dashboardDataService: DashboardDataService,
    private fundsService: FundsService) { }

  ngOnInit() {
    this.incomes = this.dashboardDataService.getFundIcomes(this.data.date);
    this.expenses = this.dashboardDataService.getFundExpenses(this.data.date);
    this.fundIdList = this.fundsService.getFundIds();
    this.initForm();
  }

  initForm() {

  }

  onAddFund(splitTable: string) {
    (<FormArray>this.form.get(splitTable)).push(
      new FormGroup({
        tameioId: new FormControl(null, Validators.required),
        tameioAmount: new FormControl(null, Validators.required)
      })
    );
  }

  onDelFund(splitTable: string, i: number) {
    (<FormArray>this.form.get(splitTable)).removeAt(i);
  }

  onSubmit() {

  }

  onNoClick() {
    this.dialogRef.close();
  }

  get incomeControls() {
    return (<FormArray>this.form.get("incomeControls")).controls;
  }

  get expenseControls() {
    return (<FormArray>this.form.get("expenseControls")).controls;
  }

  get incomeSplitControls() {
    return (<FormArray>this.form.get("incomeSplitControls")).controls;
  }

  get expenseSplitControls() {
    return (<FormArray>this.form.get("expenseSplitControls")).controls;
  }

}
