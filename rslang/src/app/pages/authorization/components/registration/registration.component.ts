import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { InputType, LoggedUser, User } from 'src/types';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  public emailPlaceholder: string;
  public namePlaceholder: string;
  public passwordPlaceholder: string;
  public regBtnTitle: string;
  public passBtnImg: string;
  public passBtnColor: string;
  public regBtnColor: string;
  public emailType: InputType;
  public passwordType: InputType;
  public nameType: InputType;
  public regForm: FormGroup;
  public emailControl: string;
  public nameControl: string;
  public passwordControl: string;
  public isRegError: boolean;
  private destroy$: Subject<void>;

  constructor(private api: ApiService, private router: Router) {
    this.emailPlaceholder = 'e-mail';
    this.namePlaceholder = 'имя пользователя';
    this.passwordPlaceholder = 'пароль';
    this.regBtnTitle = 'РЕГИСТРАЦИЯ';
    this.passBtnImg = 'assets/password-eye.png';
    this.passBtnColor = '#ffffffe7';
    this.regBtnColor = '#2c3e50';
    this.emailType = 'email';
    this.passwordType = 'password';
    this.nameType = 'text';
    this.emailControl = 'email';
    this.nameControl = 'name';
    this.passwordControl = 'password';
    this.isRegError = false;
    this.destroy$ = new Subject<void>();
  }

  public ngOnInit(): void {
    this.regForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        this.checkPassword
      ])
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  get email() {
    return this.regForm.get('email');
  }

  get name() {
    return this.regForm.get('name');
  }

  get password() {
    return this.regForm.get('password');
  }

  public showHidePassword() {
    this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password';
  }

  public submit(): void {
    if (this.regForm.valid) {
      const user: User = {
        name: this.regForm.value.name,
        email: this.regForm.value.email,
        password: this.regForm.value.password
      }
      this.api.createUser(user).pipe(takeUntil(this.destroy$)).subscribe({
        complete: () => {
          this.isRegError = false;
          this.regForm.reset();
          this.api.loginUser(user).pipe(takeUntil(this.destroy$)).subscribe((user: LoggedUser) => {
            this.api.loggedUser = user;
            this.router.navigate(['/home'])
          });
        },
        error: () => {
          this.isRegError = true;
        }
      });
    }
  }
  
  private checkPassword(control: FormControl) {
    if (!control.value) {
      return null;
    } else if (!control.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
      return {
        'patternError': true
      };
    }
    return null;
  }
}
