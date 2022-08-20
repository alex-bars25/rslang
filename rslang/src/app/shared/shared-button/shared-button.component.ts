import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent implements OnInit {

  @Input()
  buttonTitle = 'New Button'

  constructor() { }

  ngOnInit(): void {
  }

}
