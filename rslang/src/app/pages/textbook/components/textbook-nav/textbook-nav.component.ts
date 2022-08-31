import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textbook-nav',
  templateUrl: './textbook-nav.component.html',
  styleUrls: ['./textbook-nav.component.scss']
})
export class TextbookNavComponent implements OnInit {

  @Output() sectionInfo = new EventEmitter<[string, number]>();

  getColor(color: string, group: number): void {
    this.sectionInfo.emit([color, group]);
  }

  ngOnInit(): void {
  }

}
