import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public email: string;
  public userName: string;
  public password: string;
  public registration: string;
  public passBtnImg: string;
  public passBtnColor: string;
  public regBtnColor: string;

  constructor() {
    this.email = 'e-mail';
    this.userName = 'имя пользователя';
    this.password = 'пароль';
    this.registration = 'РЕГИСТРАЦИЯ';
    this.passBtnImg = 'assets/password-eye.png'
    this.passBtnColor = '#ffffffe7'
    this.regBtnColor = '#2c3e50'
  }

  ngOnInit(): void {
  }

}
