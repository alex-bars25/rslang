import { Component, OnInit } from '@angular/core';
import { InputType } from 'src/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public emailPlaceholder: string;
  public passwordPlaceholder: string;
  public buttonTitle: string;
  public buttonColor: string;
  public emailType: InputType;
  public passwordType: InputType;

  constructor() {
    this.emailPlaceholder = 'e-mail';
    this.passwordPlaceholder = 'пароль';
    this.buttonTitle = 'ВХОД';
    this.buttonColor = '#2c3e50';
    this.emailType = 'email';
    this.passwordType = 'password';
  }

  ngOnInit(): void {
  }

}
