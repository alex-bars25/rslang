import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IWord} from "../../../../../types";

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
  pageRepeat: string = "/audio_game";
  pageFinish: string = '/home';

  lengthProcent:number;

  rigthCount: number;
  wrongCount: number;

  repeatGameAgain:boolean = false;

  @Input() rightAnswers: IWord[];
  @Input() wrongAnswers: IWord[];
  @Output() repeatGameS = new EventEmitter <boolean>()

  constructor() { }

  ngOnInit(): void {
    this.createStatistick();
  }

  createStatistick() {
    this.rigthCount = this.rightAnswers.length;
    this.wrongCount = this.wrongAnswers.length
    this.lengthProcent = this.rightAnswers.length * 14
  }

  repeatGame() {
    this.repeatGameAgain = true;
    this.repeatGameS.emit(this.repeatGameAgain)
  }
}
