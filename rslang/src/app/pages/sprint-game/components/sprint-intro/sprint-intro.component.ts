import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint-intro',
  templateUrl: './sprint-intro.component.html',
  styleUrls: ['./sprint-intro.component.scss']
})
export class SprintIntroComponent implements OnInit {
  public level: number;

  constructor() {
    this.level = 1;
  }

  ngOnInit(): void {
  }

  public increaseLevel() {
    this.level < 6 ? this.level++ : this.level;
  }

  public decreaseLevel() {
    this.level > 1 ? this.level-- : this.level;
  }

}
