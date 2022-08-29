import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textbook-nav',
  templateUrl: './textbook-nav.component.html',
  styleUrls: ['./textbook-nav.component.scss']
})
export class TextbookNavComponent implements OnInit {

  @Output() colorValue = new EventEmitter<string>();

  getColor(color: string): void {
    this.colorValue.emit(color);
  }

  ngOnInit(): void {
  }

}
