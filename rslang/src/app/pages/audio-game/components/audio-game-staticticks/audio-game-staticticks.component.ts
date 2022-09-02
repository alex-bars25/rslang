import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-audio-game-staticticks',
  templateUrl: './audio-game-staticticks.component.html',
  styleUrls: ['./audio-game-staticticks.component.scss']
})
export class AudioGameStaticticksComponent implements OnInit {

  titleRepeat: string  = 'Повторить';
  titleFinish: string = 'Закончить игру!';
  logoRepeat: string = "./assets/repeat-log.svg";
  logoFinish: string = "./assets/fin.svg"
  pageRepeat: string;
  pageFinish: string = '/home';

  constructor() { }

  ngOnInit(): void {
  }

}
