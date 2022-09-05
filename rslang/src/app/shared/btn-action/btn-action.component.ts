import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-action',
  templateUrl: './btn-action.component.html',
  styleUrls: ['./btn-action.component.scss']
})
export class BtnActionComponent implements OnInit {

  @Input() public buttonTitle: string;
  @Input() public logoBook: string;
  @Input() public page: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToPage(page: string) {
    this.router.navigate([page]);
    window.scrollTo(0, 0);
  }
}
