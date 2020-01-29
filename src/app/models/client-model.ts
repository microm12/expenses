export class Client {
  id?: number;
  name: string;
  accEmail: string;
  invoiceData: string;
  contacts?: string;

  constructor(name: string, accEmail: string, invoiceData: string, contacts?: string) {
    this.id = Math.floor(Math.random() * 10);
    this.name = name;
    this.accEmail = accEmail;
    this.invoiceData = invoiceData;
    this.contacts = (contacts) ? contacts : null;
  }
}
