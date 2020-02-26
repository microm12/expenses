import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { InvoiceExpense } from "src/app/models/invoice-expense-model";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { SuppliersService } from "src/app/services/suppliers.service";
import { FundsService } from "src/app/services/funds.service";
import { InvoiceExpensesService } from "src/app/services/invoice-expenses.service";
import { Transaction, TransData } from "src/app/models/transaction";

@Component({
  selector: "app-invoice-expenses-edit",
  templateUrl: "./invoice-expenses-edit.component.html",
  styleUrls: ["./invoice-expenses-edit.component.scss"]
})
export class InvoiceExpensesEditComponent implements OnInit {
  form: FormGroup;
  invoiceExpenseId: number;
  invoiceExpense: InvoiceExpense;
  supplierIdList: number[];
  fundIdList: number[];
  editMode: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suppliersService: SuppliersService,
    private fundsService: FundsService,
    private invoiceExpensesService: InvoiceExpensesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.invoiceExpenseId = +params.id;
      this.editMode = params.id != null;
      if (this.editMode) {
        this.invoiceExpense = this.invoiceExpensesService.getInvoiceExpensesById(
          this.invoiceExpenseId
        );
      }
      this.initForm();
    });
    this.supplierIdList = this.suppliersService.getSupplierIds();
    this.fundIdList = this.fundsService.getFundIds();
  }

  initForm() {
    let name = "";
    let supplierId: number;
    let fundId: number[];
    let amount: number[];
    let payoutPeriod: number;
    let transaction: Transaction;
    let moneySplit = new FormArray([]);

    if (this.editMode) {
      name = this.invoiceExpense.name;
      supplierId = this.invoiceExpense.supplierId;
      // fundId = this.invoiceExpense.fundId;
      // amount = this.invoiceExpense.amount;
      payoutPeriod = this.invoiceExpense.payoutPeriod;
      transaction = this.invoiceExpense.transaction;
      transaction.accountTransactions.map(tameio => {
        moneySplit.push(
          new FormGroup({
            tameioId: new FormControl(tameio.fundId, Validators.required),
            tameioAmount: new FormControl(tameio.amount, Validators.required)
          })
        );
      });
    }

    this.form = new FormGroup({
      name: new FormControl(name, Validators.required),
      supplierId: new FormControl(supplierId),
      // fundId: new FormControl(fundId, Validators.required),
      // amount: new FormControl(amount, Validators.required),
      payoutPeriod: new FormControl(payoutPeriod, Validators.required),
      moneySplit:
        moneySplit.length === 0
          ? (moneySplit = new FormArray([
            new FormGroup({
              tameioId: new FormControl("", Validators.required),
              tameioAmount: new FormControl(null, Validators.required)
            })
          ]))
          : moneySplit
    });
  }

  onSubmit() {
    const transData = [];
    for (let transaction in this.form.value["moneySplit"]) {
      transData.push(
        new TransData(
          this.form.value["moneySplit"][transaction].tameioId,
          this.form.value["moneySplit"][transaction].tameioAmount
        )
      );
    }
    const newInvoiceExpense = new InvoiceExpense(
      this.form.value["name"],
      // this.form.value['fundId'],
      // this.form.value['amount'],
      this.form.value["payoutPeriod"],
      new Transaction(transData, (this.invoiceExpense.transaction.date) ? this.invoiceExpense.transaction.date : null),
      this.form.value["supplierId"]
    );
    if (this.editMode) {
      this.invoiceExpensesService.updateInvoiceExpense(
        this.invoiceExpenseId,
        newInvoiceExpense
      );
    } else {
      this.invoiceExpensesService.addInvoiceExpense(newInvoiceExpense);
    }
    this.router.navigate(["/invoice-expenses"]);
  }

  onCancel() {
    this.router.navigate(["/invoice-expenses"]);
  }

  get controls() {
    return (<FormArray>this.form.get("moneySplit")).controls;
  }

  onAddFund() {
    (<FormArray>this.form.get("moneySplit")).push(
      new FormGroup({
        tameioId: new FormControl(null, Validators.required),
        tameioAmount: new FormControl(null, Validators.required)
      })
    );
  }

  onDelFund(i: number) {
    (<FormArray>this.form.get("moneySplit")).removeAt(i);
  }
}
