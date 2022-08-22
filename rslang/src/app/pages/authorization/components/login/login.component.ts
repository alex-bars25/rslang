import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public login: string;
  public color: string;

  constructor() {
    this.email = 'e-mail';
    this.password = 'пароль';
    this.login = 'ВХОД';
    this.color = '#2c3e50'
  }

  ngOnInit(): void {
  }

}
