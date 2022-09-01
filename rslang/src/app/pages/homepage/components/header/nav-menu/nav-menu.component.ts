import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor(private router: Router) { }
  buttonColor = '#95a5a6';
  buttonTitle = 'Выход';

  goToHomePage() {
    this.router.navigateByUrl("/home");
  }

  goToTextbookPage() {
    this.router.navigateByUrl("/textbook");
  }

  goToLoginPage() {
    this.router.navigateByUrl("/authorization");
    localStorage.clear();
  }

  ngOnInit(): void {
  }

}
