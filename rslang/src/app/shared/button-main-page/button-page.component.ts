import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-main-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss']
})
export class ButtonPageComponent implements OnInit {

  @Input()
  public buttonTitle = 'New Button';

  @Input()
  public color: string;

  @Input()
  public disabled = true;

  public imgUrl = 'https://picsum.photos/70/70'

  constructor() { }

  ngOnInit(): void {
  }

}
