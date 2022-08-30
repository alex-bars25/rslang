import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  public regForm: FormGroup;
  public emailControl: string;
  public userControl: string;
  public passwordControl: string;

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
    this.emailControl = 'email';
    this.userControl = 'user';
    this.passwordControl = 'password';
  }

  public ngOnInit(): void {
    this.regForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      user: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        this.checkPassword
      ])
    });
  }

  get email() {
    return this.regForm.get('email');
  }

  get user() {
    return this.regForm.get('user');
  }

  get password() {
    return this.regForm.get('password');
  }

  public showHidePassword() {
    this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password';
  }

  public submit(): void {
    console.log(this.regForm);
  }
  
  private checkPassword(control: FormControl) {
    if (!control.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
      return {
        'patternError': true
      };
    }
    return null;
  }
}
