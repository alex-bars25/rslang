import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint-game',
  templateUrl: './sprint-game.component.html',
  styleUrls: ['./sprint-game.component.scss']
})
export class SprintGameComponent implements OnInit {
  public gameStatus: number;

  constructor() {
    this.gameStatus = 1;
  }

  ngOnInit(): void {
  }

  public getGameStatus(gameStatus: number): void {
    this.gameStatus = gameStatus;
  }
}
