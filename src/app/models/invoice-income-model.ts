import { Transaction } from './transaction';
export class InvoiceIncome {
  id?: number;
  name: string;
  customerId: number;
  fundIds;
  total = 0;
  payoutPeriod: number;
  transaction: Transaction;

  constructor(name, customerId, payoutPeriod, transaction, id?, total?) {
    this.id = (id) ? id : Math.ceil(Math.random() * 10);
    this.name = name;
    this.customerId = customerId;
    // this.fundId = fundId;
    // this.amount = amount;
    this.payoutPeriod = payoutPeriod;
    this.transaction = transaction;
    if (total) {
      this.total = total;
    } else {
      this.transaction.accountTransactions.map(data => {
        this.total += data.amount;
      });
    }
    const ids = [];
    this.transaction.accountTransactions.map(data => {
      ids.push(data.fundId);
    });

    this.fundIds = ids.toString();
  }
}
