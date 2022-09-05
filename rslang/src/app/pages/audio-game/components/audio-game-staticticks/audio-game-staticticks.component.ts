import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import {IWord} from "../../../../../types";

@Component({
  selector: 'app-audio-game-staticticks',
  templateUrl: './audio-game-staticticks.component.html',
  styleUrls: ['./audio-game-staticticks.component.scss']
})
export class AudioGameStaticticksComponent implements OnInit {
  @Output()
  display: EventEmitter<number>;

  public titleRepeat: string  = 'Повторить';
  public titleFinish: string = 'Закончить игру!';
  public logoRepeat: string = "assets/repeat-log.svg";
  public logoFinish: string = "assets/fin.svg"
  public pageFinish: string = '/home';
  public lengthProcent:number;
  public wrongAnswers: IWord[];
  public rightAnswers: IWord[];
  public rigthCount: number;
  public wrongCount: number;
  public repeatGameAgain:boolean = false;
  public score: number = 0;

  constructor(private audioService: AudioService) {
    this.display = new EventEmitter<number>();
    this.wrongAnswers = this.audioService.wrongAnswers;
    this.rightAnswers = this.audioService.correctAnswers;
  }

  ngOnInit(): void {
    this.createStatistick();
    this.updateCorrectAnswers();
    this.updateWrongAnwers();
  }

  public createStatistick() {
    this.rigthCount = this.rightAnswers.length;
    this.wrongCount = this.wrongAnswers.length
    this.lengthProcent = this.rightAnswers.length * 10;
  }

  public repeatGame(): void {
    this.display.emit(1);
  }

  private updateWrongAnwers() {
    localStorage.setItem('falseAnswersA', `${(+localStorage.getItem('falseAnswersA')! || 0) + this.wrongAnswers.length}`)
  }
  private updateCorrectAnswers() {
    localStorage.setItem('trueAnswersA', `${(+localStorage.getItem('trueAnswersA')! || 0) + this.rightAnswers.length}`);
  }

}
