export class Supplier {
  id?: number;
  name: string;
  contactEmail: string;
  contacts?: string;

  constructor(name: string, contactEmail: string, contacts?: string) {
    this.id = Math.floor(Math.random() * 10);
    this.name = name;
    this.contactEmail = contactEmail;
    this.contacts = (contacts) ? contacts : null;
  }
}
