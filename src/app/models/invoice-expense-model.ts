import { Transaction } from './transaction';
export class InvoiceExpense {
  id?: number;
  name: string;
  supplierId?: number;
  // fundId: number[];
  // amount: number[];
  payoutPeriod: number;
  transactions: Transaction[];

  constructor(name, payoutPeriod, transactions, supplierId?) {
    this.id = Math.ceil(Math.random() * 10);
    this.name = name;
    this.supplierId = (supplierId) ? supplierId : null;
    // this.fundId = fundId;
    // this.amount = amount;
    this.payoutPeriod = payoutPeriod;
    this.transactions = transactions || [];
  }
}
