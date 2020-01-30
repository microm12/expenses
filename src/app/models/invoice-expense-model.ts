export class InvoiceExpense {
  id?: number;
  name: string;
  supplierId: number;
  fundId: number;
  amount: number;
  payoutPeriod: number;

  constructor(name, supplierId, fundId, amount, payoutPeriod) {
    this.id = Math.ceil(Math.random() * 10);
    this.name = name;
    this.supplierId = supplierId;
    this.fundId = fundId;
    this.amount = amount;
    this.payoutPeriod = payoutPeriod;
  }
}
