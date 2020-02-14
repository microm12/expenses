import { FixedIncomesService } from './../../../services/fixed-incomes.service';
import { FundsService } from './../../../services/funds.service';
import { Component, OnInit } from '@angular/core';
import { FixedIncome } from 'src/app/models/fixed-income-model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-fixed-incomes-edit',
  templateUrl: './fixed-incomes-edit.component.html',
  styleUrls: ['./fixed-incomes-edit.component.scss']
})
export class FixedIncomesEditComponent implements OnInit {
  form: FormGroup;
  fixedIncomeId: number;
  fixedIncome: FixedIncome;
  clientIdList: number[];
  fundIdList: number[];
  editMode: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService,
    private fundsService: FundsService,
    private fixedIncomesService: FixedIncomesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.fixedIncomeId = +params.id;
      this.editMode = params.id != null;
      if (this.editMode) {
        this.fixedIncome = this.fixedIncomesService.getFixedIncomeById(this.fixedIncomeId);
      }
      this.initForm();
    });
    this.clientIdList = this.clientsService.getClientIds();
    this.fundIdList = this.fundsService.getFundIds();
  }

  initForm() {
    let name = '';
    let clientId: number;
    let fundId: number;
    let amount: number;
    let payoutPeriod: number;
    let day = '';
    let frequency: number;
    let startDate: Date;
    let endDate: Date;
    let poNumber = '';

    if (this.editMode) {
      name = this.fixedIncome.name;
      clientId = this.fixedIncome.customerId;
      fundId = this.fixedIncome.fundId;
      amount = this.fixedIncome.amount;
      payoutPeriod = this.fixedIncome.payoutPeriod;
      day = this.fixedIncome.day;
      frequency = this.fixedIncome.frequency;
      startDate = this.fixedIncome.startDate;
      endDate = this.fixedIncome.endDate;
      poNumber = this.fixedIncome.poNumber || '';
    }

    this.form = new FormGroup({
      name: new FormControl(name, Validators.required),
      clientId: new FormControl(clientId, Validators.required),
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
    const newfixedIncome = new FixedIncome(
      this.form.value['name'],
      this.form.value['clientId'],
      this.form.value['fundId'],
      this.form.value['amount'],
      this.form.value['payoutPeriod'],
      this.form.value['day'],
      this.form.value['frequency'],
      new Date(this.form.value['startDate']),
      new Date(this.form.value['endDate']),
      this.form.value['poNumber']
    );
    if (this.editMode) {
      this.fixedIncomesService.updateFixedIncome(this.fixedIncomeId, newfixedIncome);
    } else {
      this.fixedIncomesService.addFixedIncome(newfixedIncome);
    }
    this.router.navigate(['/fixed-incomes']);
  }

  onCancel() {
    this.router.navigate(['/fixed-incomes']);
  }
}
