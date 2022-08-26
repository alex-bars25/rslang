import { Component, OnInit } from '@angular/core';
import { InputType } from 'src/types';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public emailPlaceholder: string;
  public userPlaceholder: string;
  public passwordPlaceholder: string;
  public regBtnTitle: string;
  public passBtnImg: string;
  public passBtnColor: string;
  public regBtnColor: string;
  public emailType: InputType;
  public passwordType: InputType;
  public userType: InputType;

  constructor() {
    this.emailPlaceholder = 'e-mail';
    this.userPlaceholder = 'имя пользователя';
    this.passwordPlaceholder = 'пароль';
    this.regBtnTitle = 'РЕГИСТРАЦИЯ';
    this.passBtnImg = 'assets/password-eye.png';
    this.passBtnColor = '#ffffffe7';
    this.regBtnColor = '#2c3e50';
    this.emailType = 'email';
    this.passwordType = 'password';
    this.userType = 'text';
  }

  ngOnInit(): void {
  }

  public showHidePassword() {
    this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password';
  }

}
