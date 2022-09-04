import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { interval, take } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { SprintService } from 'src/app/services/sprint.service';
import { IWord } from 'src/types';

@Component({
  selector: 'app-sprint-play',
  templateUrl: './sprint-play.component.html',
  styleUrls: ['./sprint-play.component.scss']
})
export class SprintPlayComponent implements OnInit {
  @Output()
  gameStatus: EventEmitter<number>;

  @HostListener('document:keyup', ['$event.key'])
  onKeyUp(key: string) {
    if (key === 'ArrowLeft') {
      this.answer(false);
    }
    if (key === 'ArrowRight') {
      this.answer(true);
    }
  }
  
  public seconds: number;
  public score: number;
  public points: number;
  public wrong: boolean;
  public correct: boolean;
  public level: number;
  public words: IWord[];
  public word: IWord;
  public translate: string;
  public pewSound: HTMLAudioElement;
  public wrongSound: HTMLAudioElement;
  public gongSound: HTMLAudioElement;
  public wrongAnswers: IWord[];
  public correctAnswers: IWord[];
  public streak: number;
  public firstCircle: boolean;

  constructor(private router: Router, private api: ApiService, private sprintService: SprintService) {
    this.gameStatus = new EventEmitter<number>();
    this.seconds = 60;
    this.score = 0;
    this.points = 10;
    this.wrong = false;
    this.correct = false;
    this.level = 0;
    this.words = this.sprintService.words;
    this.word = this.words[0];
    this.pewSound = new Audio('assets/voices/pew.mp3');
    this.wrongSound = new Audio('assets/voices/wrong.mp3');
    this.gongSound = new Audio('assets/voices/gong.mp3');
    this.wrongAnswers = [];
    this.correctAnswers = [];
    this.streak = 0;
  }

  public ngOnInit(): void {
    this.countdown();
    this.getRandomWord();
    this.getRandomTranslate();
  }

  private countdown(): void {
    interval(1000)
      .pipe(take(60))
      .subscribe(() => {
        this.seconds--;
        if (!this.seconds) {
          this.gameStatus.emit(3);
          this.sprintService.wrongAnswers = this.wrongAnswers;
          this.sprintService.correctAnswers = this.correctAnswers;
          this.sprintService.score = this.score;
        }
      });
  }

  public endGame(): void {
    this.router.navigate(['/home'])
  }

  private getIndex(): number {
    return Math.floor(Math.random() * this.words.length);
  }

  private getRandomWord(): void {
    this.word = this.words[this.getIndex()];
  }

  private getRandomTranslate(): void {
    if (Math.random() < 0.5) {
      this.translate = this.word.wordTranslate;
    } else {
      this.translate = this.words[this.getIndex()].wordTranslate;
    }
  }

  public answer(ans: boolean): void {
    if (this.word.wordTranslate === this.translate) {
      if (ans === true) {
        this.correctAnswer();
      } else {
        this.wrongAnswer();
      }
    } else {
      if (ans === true) {
        this.wrongAnswer();
      } else {
        this.correctAnswer();
      }
    }
    this.words.splice(this.words.indexOf(this.word), 1);
    this.getRandomWord();
    this.getRandomTranslate();
  }

  private correctAnswer(): void {
    this.correct = true;
    this.pewSound.play();
    setTimeout(() => this.correct = false, 200);
    this.correctAnswers.push(this.word);
    this.score += this.points;
    this.streak++;
    if (this.streak === 3) {
      this.points *= 2;
      this.gongSound.play();
    }
    if (this.streak === 7) {
      this.points *= 2;
      this.gongSound.play();
    }
    if (this.streak === 11) {
      this.points *= 2;
      this.gongSound.play();
    }
  }

  private wrongAnswer(): void {
    this.wrong = true;
    this.wrongSound.play();
    setTimeout(() => this.wrong = false, 200);
    this.wrongAnswers.push(this.word);
    this.streak = 0;
    this.points = 10;
  }
}
