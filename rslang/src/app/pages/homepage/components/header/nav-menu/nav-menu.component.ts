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

  ngOnInit(): void {
  }

  public goToHomePage() {
    this.router.navigateByUrl("/home");
  }

  public goToTextbookPage() {
    this.router.navigateByUrl("/textbook");
  }

  public goToStatistic() {
    this.router.navigateByUrl("/statistic");
  }

  public goToLoginPage() {
    this.router.navigateByUrl("/authorization");
    localStorage.clear();
  }

  public goToDictionaryPage() {
    this.router.navigateByUrl("/dictionary");
  }

  public goToAbout() {
    this.router.navigateByUrl("/home");
    window.scrollTo(0,document.body.scrollHeight);
  }

  public navigateTo(page: string) {
    this.router.navigate([page])
  }

}
