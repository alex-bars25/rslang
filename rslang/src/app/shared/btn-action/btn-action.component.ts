import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-action',
  templateUrl: './btn-action.component.html',
  styleUrls: ['./btn-action.component.scss']
})
export class BtnActionComponent implements OnInit {

  @Input()  public buttonTitle: string;
  @Input() public logo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
