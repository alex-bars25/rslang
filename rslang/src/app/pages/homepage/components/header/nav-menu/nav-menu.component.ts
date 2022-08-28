import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  buttonColor = '#95a5a6';
  buttonTitle = 'Выход';

  ngOnInit(): void {
  }

}
