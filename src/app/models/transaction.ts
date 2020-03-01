export class Transaction {
  id?: number;
  date?: string;
  accountTransactions: TransData[];

  constructor(accountTransactions: TransData[], date?: string, id?: number) {
    this.date = date;
    this.accountTransactions = accountTransactions;
    this.id = id || null;
  }
}

export class TransData {
  fundId: number;
  amount: number;

  constructor(fundId: number, amount: number) {
    this.fundId = fundId;
    this.amount = amount;
  }
}
