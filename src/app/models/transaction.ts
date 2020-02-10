export class Transaction {
  id?: number;
  date?: Date;
  accountTransactions: TransData[];

  constructor(accountTransactions: TransData[]) {
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
