import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint-game',
  templateUrl: './sprint-game.component.html',
  styleUrls: ['./sprint-game.component.scss']
})
export class SprintGameComponent implements OnInit {
  isStarted: boolean;

  constructor() {
    this.isStarted = true;
  }

  ngOnInit(): void {
  }

  public getGameStatus(isStarted: boolean): void {
    this.isStarted = isStarted;
  }
}
