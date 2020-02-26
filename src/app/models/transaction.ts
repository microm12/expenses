export class Transaction {
  id?: number;
  date?: string;
  accountTransactions: TransData[];

  constructor(accountTransactions: TransData[], date?: string) {
    this.date = date;
    this.accountTransactions = accountTransactions;
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
