import { Transaction } from './transaction';
export class InvoiceIncome {
  id?: number;
  name: string;
  customerId: number;
  // fundId: number[];
  // amount: number[];
  payoutPeriod: number;
  transactions: Transaction[];

  constructor(name, customerId, payoutPeriod, transactions) {
    this.id = Math.ceil(Math.random() * 10);
    this.name = name;
    this.customerId = customerId;
    // this.fundId = fundId;
    // this.amount = amount;
    this.payoutPeriod = payoutPeriod;
    this.transactions = transactions || [];
  }
}
