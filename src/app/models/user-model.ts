export class User {
  private email: string;
  private password: string;
  private _token: string;
  private tokenExp: Date;

  constructor(email, password, _token?, tokenExp?) {
    this.email = email;
    this.password = password;
    this._token = _token;
    this.tokenExp = tokenExp;
  }

  get token() {
    if (!this.tokenExp || new Date() > this.tokenExp) {
      return null;
    }
    return this._token;
  }
}
