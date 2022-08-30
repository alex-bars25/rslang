import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputType } from '../../../types/index';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() type: InputType;
  @Input() controlName: string;
  @Input() form: FormGroup;

  ngOnInit(): void {
    if(!this.placeholder) {
      this.placeholder = '';
    };
  }
  
}
