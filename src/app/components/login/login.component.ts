import { User } from './../../models/user-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    let email = '';
    let password = '';
    this.form = new FormGroup({
      email: new FormControl(email, [Validators.required, Validators.email]),
      password: new FormControl(password, Validators.required),
    });
  }

  onSubmit() {
    const user = new User(
      this.form.value['email'],
      this.form.value['password']
    );
    console.log(user); // placeholder till auth handling is implemented
    this.router.navigate(['/']);
  }

}
