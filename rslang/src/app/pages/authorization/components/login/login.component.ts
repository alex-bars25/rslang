import { HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { InputType, LoggedUser, User } from 'src/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public emailPlaceholder: string;
  public passwordPlaceholder: string;
  public buttonTitle: string;
  public buttonColor: string;
  public emailType: InputType;
  public passwordType: InputType;
  public logForm: FormGroup;
  public emailControl: string;
  public passwordControl: string;
  public isLogError: boolean;
  private destroy$: Subject<void>;

  constructor(private api: ApiService, private router: Router) {
    this.emailPlaceholder = 'e-mail';
    this.passwordPlaceholder = 'пароль';
    this.buttonTitle = 'ВХОД';
    this.buttonColor = '#2c3e50';
    this.emailType = 'email';
    this.passwordType = 'password';
    this.emailControl = 'email';
    this.passwordControl = 'password';
    this.isLogError = false;
    this.destroy$ = new Subject<void>();
  }

  public ngOnInit(): void {
    this.logForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get email() {
    return this.logForm.get('email');
  }

  get password() {
    return this.logForm.get('password');
  }

  public submit(): void {
    if (this.logForm.valid) {
      const user: User = {
        email: this.logForm.value.email,
        password: this.logForm.value.password
      }
      this.api.loginUser(user).pipe(takeUntil(this.destroy$)).subscribe({
        next: (user: LoggedUser) => {
          localStorage.setItem('token', user.token);
          localStorage.setItem('refreshToken', user.refreshToken);
          localStorage.setItem('userId', user.userId);
          localStorage.setItem('name', user.name);  
        },
        complete: () => {
          this.isLogError = false;
          this.logForm.reset();
          this.router.navigate(['/home']);
        },
        error: () => {
          this.isLogError = true;
        }
      });
    }
  }

}
