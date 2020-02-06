import { InvoiceIncome } from './../../../models/invoice-income-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { FundsService } from 'src/app/services/funds.service';
import { InvoiceIncomesService } from 'src/app/services/invoice-incomes.service';

@Component({
  selector: 'app-invoice-incomes-edit',
  templateUrl: './invoice-incomes-edit.component.html',
  styleUrls: ['./invoice-incomes-edit.component.scss']
})
export class InvoiceIncomesEditComponent implements OnInit {
  form: FormGroup;
  invoiceIncomeId: number;
  invoiceIncome: InvoiceIncome;
  clientIdList: number[];
  fundIdList: number[];
  editMode: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService,
    private fundsService: FundsService,
    private invoiceIncomesService: InvoiceIncomesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.invoiceIncomeId = +params.id;
      this.editMode = params.id != null;
      if (this.editMode) {
        this.invoiceIncome = this.invoiceIncomesService.getInvoiceIncomesById(this.invoiceIncomeId);
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

    if (this.editMode) {
      name = this.invoiceIncome.name;
      clientId = this.invoiceIncome.customerId;
      fundId = this.invoiceIncome.fundId;
      amount = this.invoiceIncome.amount;
      payoutPeriod = this.invoiceIncome.payoutPeriod;
    }

    this.form = new FormGroup({
      name: new FormControl(name, Validators.required),
      clientId: new FormControl(clientId, Validators.required),
      fundId: new FormControl(fundId, Validators.required),
      amount: new FormControl(amount, Validators.required),
      payoutPeriod: new FormControl(payoutPeriod, Validators.required),
    });
  }

  onSubmit() {
    const newInvoiceIncome = new InvoiceIncome(
      this.form.value['name'],
      this.form.value['clientId'],
      this.form.value['fundId'],
      this.form.value['amount'],
      this.form.value['payoutPeriod']
    );
    if (this.editMode) {
      this.invoiceIncomesService.updateInvoiceIncome(this.invoiceIncomeId, newInvoiceIncome);
    } else {
      this.invoiceIncomesService.addInvoiceIncome(newInvoiceIncome);
    }
    this.router.navigate(['/invoice-incomes']);
  }

  onCancel() {
    this.router.navigate(['/invoice-incomes']);
  }
}
