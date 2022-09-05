import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-main-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss']
})
export class ButtonPageComponent {

  @Input()
  public buttonTitle: string;

  @Input()
  public color: string;

  @Input()
  public imgUrl: string;

  constructor() { }
}
