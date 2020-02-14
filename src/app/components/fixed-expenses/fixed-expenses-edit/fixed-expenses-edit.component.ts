import { SuppliersService } from './../../../services/suppliers.service';
import { FixedExpense } from './../../../models/fixed-expense-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FundsService } from 'src/app/services/funds.service';
import { FixedExpensesService } from 'src/app/services/fixed-expenses.service';

@Component({
  selector: 'app-fixed-expenses-edit',
  templateUrl: './fixed-expenses-edit.component.html',
  styleUrls: ['./fixed-expenses-edit.component.scss']
})
export class FixedExpensesEditComponent implements OnInit {
  form: FormGroup;
  fixedExpenseId: number;
  fixedExpense: FixedExpense;
  supplierIdList: number[];
  fundIdList: number[];
  editMode: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private suppliersService: SuppliersService,
    private fundsService: FundsService,
    private fixedExpensesService: FixedExpensesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.fixedExpenseId = +params.id;
      this.editMode = params.id != null;
      if (this.editMode) {
        this.fixedExpense = this.fixedExpensesService.getFixedExpenseById(this.fixedExpenseId);
      }
      this.initForm();
    });
    this.supplierIdList = this.suppliersService.getSupplierIds();
    this.fundIdList = this.fundsService.getFundIds();
  }

  initForm() {
    let name = '';
    let supplierId: number;
    let fundId: number;
    let amount: number;
    let payoutPeriod: number;
    let day = '';
    let frequency: number;
    let startDate: Date;
    let endDate: Date;
    let poNumber = '';

    if (this.editMode) {
      name = this.fixedExpense.name;
      supplierId = this.fixedExpense.supplierId;
      fundId = this.fixedExpense.fundId;
      amount = this.fixedExpense.amount;
      payoutPeriod = this.fixedExpense.payoutPeriod;
      day = this.fixedExpense.day;
      frequency = this.fixedExpense.frequency;
      startDate = this.fixedExpense.startDate;
      endDate = this.fixedExpense.endDate;
      poNumber = this.fixedExpense.poNumber || '';
    }

    this.form = new FormGroup({
      name: new FormControl(name, Validators.required),
      supplierId: new FormControl(supplierId),
      fundId: new FormControl(fundId, Validators.required),
      amount: new FormControl(amount, Validators.required),
      payoutPeriod: new FormControl(payoutPeriod, Validators.required),
      day: new FormControl(day, Validators.required),
      frequency: new FormControl(frequency, Validators.required),
      startDate: new FormControl(startDate, Validators.required),
      endDate: new FormControl(endDate, Validators.required),
      poNumber: new FormControl(poNumber)
    });
  }

  onSubmit() {
    const newfixedExpense = new FixedExpense(
      this.form.value['name'],
      this.form.value['fundId'],
      this.form.value['amount'],
      this.form.value['payoutPeriod'],
      this.form.value['day'],
      this.form.value['frequency'],
      new Date(this.form.value['startDate']),
      new Date(this.form.value['endDate']),
      this.form.value['supplierId'],
      this.form.value['poNumber']
    );
    if (this.editMode) {
      this.fixedExpensesService.updateFixedExpense(this.fixedExpenseId, newfixedExpense);
    } else {
      this.fixedExpensesService.addFixedExpense(newfixedExpense);
    }
    this.router.navigate(['/fixed-expenses']);
  }

  onCancel() {
    this.router.navigate(['/fixed-expenses']);
  }
}
