import { Fund } from './../../../models/fund-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FundsService } from 'src/app/services/funds.service';

@Component({
  selector: 'app-funds-edit',
  templateUrl: './funds-edit.component.html',
  styleUrls: ['./funds-edit.component.scss']
})
export class FundsEditComponent implements OnInit {
  form: FormGroup;
  fundId: number;
  fund: Fund;
  editMode: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private fundsService: FundsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.fundId = +params.id;
      this.editMode = params.id != null;
      if (this.editMode) {
        this.fund = this.fundsService.getFundById(this.fundId);
      }
      this.initForm();
    });
  }

  initForm() {
    let name = '';
    let bank = '';
    let iban = '';
    let accNumber = '';
    let accData = '';
    let startMoney: number;

    if (this.editMode) {
      name = this.fund.name;
      bank = this.fund.bank;
      iban = this.fund.iban;
      accNumber = this.fund.accNumber;
      accData = (this.fund.accData) ? this.fund.accData : '';
      startMoney = (this.fund.startMoney) ? this.fund.startMoney : 0;
    }

    this.form = new FormGroup({
      name: new FormControl(name, Validators.required),
      bank: new FormControl(bank, Validators.required),
      iban: new FormControl(iban, Validators.required),
      accNumber: new FormControl(accNumber, Validators.required),
      accData: new FormControl(accData)
    });
    if (!this.editMode) {
      this.form.addControl('startMoney', new FormControl(startMoney, Validators.required));
    }
  }

  onSubmit() {

    if (this.editMode) {
      const newFund = new Fund(
        this.form.value['name'],
        this.form.value['bank'],
        this.form.value['iban'],
        this.form.value['accNumber'],
        this.fund.startMoney,
        this.form.value['accData']
      );
      this.fundsService.updateFund(this.fundId, newFund);
    } else {
      const newFund = new Fund(
        this.form.value['name'],
        this.form.value['bank'],
        this.form.value['iban'],
        this.form.value['accNumber'],
        this.form.value['startMoney'],
        this.form.value['accData']
      );
      this.fundsService.addFund(newFund);
    }
    this.router.navigate(['/funds']);
  }

  onCancel() {
    this.router.navigate(['/funds']);
  }

}
