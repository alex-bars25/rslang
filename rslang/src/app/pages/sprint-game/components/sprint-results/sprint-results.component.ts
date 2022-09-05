import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SprintService } from 'src/app/services/sprint.service';
import { IWord } from 'src/types';

@Component({
  selector: 'app-sprint-results',
  templateUrl: './sprint-results.component.html',
  styleUrls: ['./sprint-results.component.scss']
})
export class SprintResultsComponent implements OnInit {
  @Output()
  gameStatus: EventEmitter<number>;

  public wrongAnswers: IWord[];
  public correctAnswers: IWord[];
  public score: number;

  constructor(private router: Router, private sprintService: SprintService) {
    this.gameStatus = new EventEmitter<number>();
    this.wrongAnswers = this.sprintService.wrongAnswers;
    this.correctAnswers = this.sprintService.correctAnswers;
    this.score = this.sprintService.score;
  }

  ngOnInit(): void {
    this.updateWrongAnswers();
    this.updateCorrectAnswers();
    this.updateRecord();
  }

  public newGame(): void {
    this.gameStatus.emit(1);
  }

  public toHomePage(): void {
    this.router.navigate(['/home']);
  }

  public playAudio(audio: string): void {
    let sound = new Audio(`https://app-learnwords-rslang.herokuapp.com/${audio}`);
    sound.play();
  }

  private updateWrongAnswers() {
    localStorage.setItem('falseAnswersS', `${(+localStorage.getItem('falseAnswersS')! || 0) + this.wrongAnswers.length}`);
  }

  private updateCorrectAnswers() {
    localStorage.setItem('trueAnswersS', `${(+localStorage.getItem('trueAnswersS')! || 0) + this.correctAnswers.length}`);
  }

  private updateRecord() {
    const record: number = +localStorage.getItem('recordS')! || 0;
    if (!record || record < this.score) {
      localStorage.setItem('recordS', `${this.score}`);
    }
  }

}
