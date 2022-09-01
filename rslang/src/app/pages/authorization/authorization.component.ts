import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  public title: string;
  public isRegistered: boolean;
  public text: string;
  public link: string;

  constructor(private router: Router) {
    this.title = 'RS Lang';
    this.isRegistered = true;
    this.text = 'Не зарегистрированы?';
    this.link = 'Создать аккаунт';
}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/home']);
    }
  }

  public switchForm() {
    this.isRegistered = !this.isRegistered;
    if (this.isRegistered) {
      this.text = 'Не зарегистрированы?';
      this.link = 'Создать аккаунт';
    } else {
      this.text = 'Уже зарегистрированы?';
      this.link = 'Войти';
    }
  }
}
