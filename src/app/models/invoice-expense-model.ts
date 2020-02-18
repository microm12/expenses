import { Transaction } from "./transaction";
export class InvoiceExpense {
  id?: number;
  name: string;
  supplierId?: number;
  fundIds;
  total: number = 0;
  payoutPeriod: number;
  transaction: Transaction;

  constructor(name, payoutPeriod, transaction, supplierId?) {
    this.id = Math.ceil(Math.random() * 10);
    this.name = name;
    this.supplierId = supplierId ? supplierId : null;
    // this.fundId = fundId;
    // this.amount = amount;
    this.payoutPeriod = payoutPeriod;
    this.transaction = transaction;
    let ids = [];
    this.transaction.accountTransactions.map(data => {
      this.total += data.amount;
      ids.push(data.fundId);
    });
    this.fundIds = ids.toString();
  }
}
