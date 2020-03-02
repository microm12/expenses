import { TransData } from 'src/app/models/transaction';
import { FundsService } from 'src/app/services/funds.service';
import { InvoiceExpense } from 'src/app/models/invoice-expense-model';
import { InvoiceIncome } from 'src/app/models/invoice-income-model';
import { DashboardDataService } from './../../../services/dashboard-data.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Transaction } from 'src/app/models/transaction';
import { DateUtilities } from 'src/app/models/misc/dateUtilities';

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
    this.incomes = (this.dashboardDataService.getFundIncomes(this.data.date).length) ?
      this.dashboardDataService.getFundIncomes(this.data.date) :
      null;
    this.expenses = (this.dashboardDataService.getFundExpenses(this.data.date).length) ?
      this.dashboardDataService.getFundExpenses(this.data.date) :
      null;
    this.fundIdList = this.fundsService.getFundIds();
    this.initForm();
    console.log(this.incomeControls);

  }

  initForm() {
    const incomes = new FormArray([]);
    const expenses = new FormArray([]);

    if (this.incomes) {
      this.incomes.map(income => {
        const incomeSplit = new FormArray([]);
        income.transaction.accountTransactions.map(trans => {
          incomeSplit.push(new FormGroup({
            tameioId: new FormControl(trans.fundId, Validators.required),
            tameioAmount: new FormControl(trans.amount, Validators.required)
          }));
        });
        incomes.push(
          new FormGroup({
            incomeTransDate: new FormControl(income.transaction.date, Validators.required),
            incTotal: new FormControl(income.total),
            incomeSplit
          })
        );
      });
    }

    if (this.expenses) {
      this.expenses.map(expense => {
        const expenseSplit = new FormArray([]);
        expense.transaction.accountTransactions.map(trans => {
          expenseSplit.push(new FormGroup({
            tameioId: new FormControl(trans.fundId, Validators.required),
            tameioAmount: new FormControl(trans.amount, Validators.required)
          }));
        });
        expenses.push(
          new FormGroup({
            expenseTransDate: new FormControl(expense.transaction.date, Validators.required),
            expTotal: new FormControl(expense.total),
            expenseSplit
          })
        );
      });
    }

    this.form = new FormGroup({
      incomes,
      expenses
    });
  }

  onAddFund(splitTable: string, index: number) {
    if (splitTable === 'incomeSplit') {
      (<FormArray>this.incomeControls[index].get(splitTable)).push(
        new FormGroup({
          tameioId: new FormControl(null, Validators.required),
          tameioAmount: new FormControl(null, Validators.required)
        })
      );
    } else {
      (<FormArray>this.expenseControls[index].get(splitTable)).push(
        new FormGroup({
          tameioId: new FormControl(null, Validators.required),
          tameioAmount: new FormControl(null, Validators.required)
        })
      );
    }
  }

  onDelFund(splitTable: string, topIndex: number, index: number) {
    if (splitTable === 'incomeSplit') {
      (<FormArray>this.incomeControls[topIndex].get(splitTable)).removeAt(index);
    } else {
      (<FormArray>this.expenseControls[topIndex].get(splitTable)).removeAt(index);
    }
  }

  onSubmit() {
    if (this.incomes) {
      this.dashboardDataService.saveFundIncomes(this.incomes.map(income => {
        const newTrans = [];
        const transArray = this.getIncomeSplitControls(this.incomes.indexOf(income));
        for (const trans of transArray) {
          newTrans.push(new TransData(trans.value.tameioId,
            trans.value.tameioAmount));
        }
        return (new InvoiceIncome(
          income.name,
          income.customerId,
          income.payoutPeriod,
          new Transaction(
            newTrans,
            new DateUtilities().formatDate(new Date(this.form.value['incomes'][this.incomes.indexOf(income)].incomeTransDate))),
          income.id));
      }));
    }

    if (this.expenses) {
      this.dashboardDataService.saveFundExpenses(this.expenses.map(expense => {
        const newTrans = [];
        const transArray = this.getExpenseSplitControls(this.expenses.indexOf(expense));
        for (const trans of transArray) {
          newTrans.push(new TransData(trans.value.tameioId,
            trans.value.tameioAmount));
        }
        return (new InvoiceExpense(
          expense.name,
          expense.payoutPeriod,
          new Transaction(
            newTrans,
            new DateUtilities().formatDate(new Date(this.form.value['expenses'][this.expenses.indexOf(expense)].expenseTransDate))),
          expense.supplierId,
          expense.id));
      }));
    }

    this.dialogRef.close('yes');

  }

  onNoClick() {
    this.dialogRef.close();
  }

  get incomeControls() {
    return (<FormArray>this.form.get("incomes")).controls;
  }

  get expenseControls() {
    return (<FormArray>this.form.get("expenses")).controls;
  }

  getIncomeSplitControls(index: number) {
    return (<FormArray>this.incomeControls[index].controls.incomeSplit.controls);
  }

  getExpenseSplitControls(index: number) {
    return (<FormArray>this.expenseControls[index].controls.expenseSplit.controls);
  }

}
