import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-block',
  templateUrl: './games-block.component.html',
  styleUrls: ['./games-block.component.scss']
})
export class GamesBlockComponent implements OnInit {

  titleSprintGameBlock: string = 'Спринт';
  titleAudioGameBlock: string = 'АудиоВызов';
  imgSprintGameBlock: string = "./assets/game-sprint.jpg";
  imgAudioGameBlock: string = "./assets/audio-vall.jpg";
  titleBlockGame: string = 'Вперед!'
  sprintImgLogo: string = "./assets/logo-btn-game.svg";
  audioImgLogo: string = "./assets/logo-btn-game.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
