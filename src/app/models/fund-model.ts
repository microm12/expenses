export class Fund {
  id?: number;
  name: string;
  bank: string;
  iban: string;
  accNumber: string;
  accData?: string;
  startMoney?: number;

  constructor(name, bank, iban, accNumber, startMoney, accData?, id?: number) {
    this.id = (id) ? id : Math.floor(Math.random() * 10);
    this.name = name;
    this.bank = bank;
    this.iban = iban;
    this.accNumber = accNumber;
    this.accData = (accData) ? accData : null;
    this.startMoney = startMoney;
  }
}
