import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic-card',
  templateUrl: './statistic-card.component.html',
  styleUrls: ['./statistic-card.component.scss']
})
export class StatisticCardComponent {

  @Input() public textTitle: string;
  @Input() public value: string;
  @Input() public subText: string;
  @Input() public tittle: string;
  @Input() public iconLink: string;

  ngOnInit(): void {
    if( this.value === undefined) { this.value = '0'};
  }
}
