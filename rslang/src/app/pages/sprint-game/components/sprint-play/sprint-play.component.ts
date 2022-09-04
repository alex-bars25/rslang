import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { interval, take } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { SprintService } from 'src/app/services/sprint.service';
import { IWord, userWord } from 'src/types';

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

  public isReady: boolean;
  public getReady: string[];
  public phrase: string;
  public bip: HTMLAudioElement;
  public whistle: HTMLAudioElement;
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
  private prevWord: IWord[];
  private userWords: userWord[];

  constructor(private router: Router, private api: ApiService, private sprintService: SprintService) {
    this.gameStatus = new EventEmitter<number>();
    this.isReady = false;
    this.getReady = ['На старт!', 'Внимание!', 'Марш!'];
    this.phrase = 'Приготовься!';
    this.bip = new Audio('assets/voices/bip.mp3');
    this.whistle = new Audio('assets/voices/whistle.mp3');
    this.seconds = 60;
    this.score = 0;
    this.points = 10;
    this.wrong = false;
    this.correct = false;
    this.level = 0;
    this.pewSound = new Audio('assets/voices/pew.mp3');
    this.wrongSound = new Audio('assets/voices/wrong.mp3');
    this.gongSound = new Audio('assets/voices/gong.mp3');
    this.wrongAnswers = [];
    this.correctAnswers = [];
    this.streak = 0;
  }

  public ngOnInit(): void {
    interval(1000)
      .pipe(take(this.getReady.length))
      .subscribe((i) => {
        this.phrase = this.getReady[i];
        this.bip.play();
      });
    setTimeout(() => {
      this.whistle.play();
      this.isReady = true;
      this.countdown();
      this.getRandomWord();
      this.getRandomTranslate();
    }, 4000);
    this.words = this.sprintService.words;
    this.userWords = this.sprintService.userWords;
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
    this.prevWord = this.words.splice(this.words.indexOf(this.word), 1);
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
    this.getRandomWord();
    this.getRandomTranslate();
    console.log(this.words.length);

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
    let userWord = this.userWords.find((word: userWord) => word.wordId === this.prevWord[0].id);
    if (!userWord) {
      this.api.createUserWord(localStorage.getItem('userId')!, this.prevWord[0].id, {difficulty: 'false', optional: {}}).subscribe();
      this.updateStudiedWords(true);
    } else if (userWord.difficulty === 'true') {
      this.api.updateUserWord(localStorage.getItem('userId')!, this.prevWord[0].id, {difficulty: 'false', optional: {}}).subscribe();
      this.updateStudiedWords(true);
    }
  }

  private wrongAnswer(): void {
    this.wrong = true;
    this.wrongSound.play();
    setTimeout(() => this.wrong = false, 200);
    this.wrongAnswers.push(this.word);
    this.streak = 0;
    this.points = 10;
    let userWord = this.userWords.find((word: userWord) => word.wordId === this.prevWord[0].id);
    if (!userWord) {
      this.api.createUserWord(localStorage.getItem('userId')!, this.prevWord[0].id, {difficulty: 'true', optional: {}}).subscribe();
    } else if (userWord.difficulty === 'false') {
      this.api.deleteUserWord(localStorage.getItem('userId')!, this.prevWord[0].id).subscribe();
      this.updateStudiedWords(false);
    }
  }

  private updateStudiedWords(add: boolean) {
    if (add) {
      localStorage.setItem('studWordsS', `${(+localStorage.getItem('studWordsS')! || 0) + 1}`)
    } else {
      localStorage.setItem('studWordsS', `${+localStorage.getItem('studWordsS')! - 1}`)
    }
  }

}
