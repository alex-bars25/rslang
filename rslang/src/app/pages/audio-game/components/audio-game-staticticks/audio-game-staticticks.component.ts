import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IWord} from "../../../../../types";

@Component({
  selector: 'app-audio-game-staticticks',
  templateUrl: './audio-game-staticticks.component.html',
  styleUrls: ['./audio-game-staticticks.component.scss']
})
export class AudioGameStaticticksComponent implements OnInit {

  public titleRepeat: string  = 'Повторить';
  public titleFinish: string = 'Закончить игру!';
  public logoRepeat: string = "./assets/repeat-log.svg";
  public logoFinish: string = "./assets/fin.svg"
  public pageFinish: string = '/home';
  public lengthProcent:number;
  public rigthCount: number;
  public wrongCount: number;
  public repeatGameAgain:boolean = false;
  public score: number = 0;

  @Input() rightAnswers: IWord[];
  @Input() wrongAnswers: IWord[];
  @Output() repeatGameS = new EventEmitter <boolean>()

  constructor() { }

  ngOnInit(): void {
    this.createStatistick();
    this.updateCorrectAnswers();
    this.updateWrongAnwers();
    this.updateRecord();
  }

  public createStatistick() {
    this.rigthCount = this.rightAnswers.length;
    this.wrongCount = this.wrongAnswers.length
    this.lengthProcent = this.rightAnswers.length * 14
  }

  public repeatGame() {
    this.repeatGameAgain = true;
    this.repeatGameS.emit(this.repeatGameAgain)
  }

  private updateWrongAnwers() {
    localStorage.setItem('falseAnwersA', `${(+localStorage.getItem('falseAnswersA')! || 0) + this.wrongAnswers.length}`)
  }
  private updateCorrectAnswers() {
    localStorage.setItem('trueAnswersS', `${(+localStorage.getItem('trueAnswersS')! || 0) + this.rightAnswers.length}`);
  }

  private updateRecord() {
    const record: number = +localStorage.getItem('recordS')! || 0;
    if (!record || record < this.score) {
      localStorage.setItem('recordS', `${this.score}`);
    }
  }



}
