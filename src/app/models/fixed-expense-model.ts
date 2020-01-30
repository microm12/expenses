export class FixedExpense {
  id?: number;
  name: string;
  supplierId?: number;
  fundId: number;
  amount: number;
  payoutPeriod: number;
  day: string;
  frequency: number;
  startDate: Date;
  endDate: Date;
  poNumber?: string;

  constructor(name, supplierId, fundId, amount, payoutPeriod, day, frequency, startDate, endDate, poNumber?) {
    this.id = Math.ceil(Math.random() * 10);
    this.name = name;
    this.supplierId = supplierId;
    this.fundId = fundId;
    this.amount = amount;
    this.payoutPeriod = payoutPeriod;
    this.day = day;
    this.frequency = frequency;
    this.startDate = startDate;
    this.endDate = endDate;
    this.poNumber = (poNumber) ? poNumber : null;
  }
}
