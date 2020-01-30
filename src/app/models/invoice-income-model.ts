export class InvoiceIncome {
  id?: number;
  name: string;
  customerId: number;
  fundId: number;
  amount: number;
  payoutPeriod: number;

  constructor(name, customerId, fundId, amount, payoutPeriod) {
    this.id = Math.ceil(Math.random() * 10);
    this.name = name;
    this.customerId = customerId;
    this.fundId = fundId;
    this.amount = amount;
    this.payoutPeriod = payoutPeriod;
  }
}
