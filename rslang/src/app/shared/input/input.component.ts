import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { InputType } from '../../../types/index';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() placeholder?: string;
  @Input() type: InputType;
  @Output() editValue = new EventEmitter<string>();

  ngOnInit(): void {
    if( this.placeholder === undefined) { this.placeholder = ''};
  }
  
}
