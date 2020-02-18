import { Transaction } from "./transaction";
export class InvoiceIncome {
  id?: number;
  name: string;
  customerId: number;
  // fundId: number[];
  total: number = 0;
  payoutPeriod: number;
  transaction: Transaction;

  constructor(name, customerId, payoutPeriod, transaction) {
    this.id = Math.ceil(Math.random() * 10);
    this.name = name;
    this.customerId = customerId;
    // this.fundId = fundId;
    // this.amount = amount;
    this.payoutPeriod = payoutPeriod;
    this.transaction = transaction;
    this.transaction.accountTransactions.map(data => {
      this.total += data.amount;
    });
  }
}
