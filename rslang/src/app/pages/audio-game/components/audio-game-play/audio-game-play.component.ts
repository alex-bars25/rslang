import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {IWord, userWord} from "../../../../../types";
import {AudioService} from "../../../../services/audio.service";
import {ApiService} from "../../../../services/api.service";

@Component({
  selector: 'app-audio-game-play',
  templateUrl: './audio-game-play.component.html',
  styleUrls: ['./audio-game-play.component.scss']
})
export class AudioGamePlayComponent implements OnInit {
  @Output()
  display: EventEmitter<number>;

  @HostListener('document: keyup', ['$event.key'])
  onKeyUp(key: number) {
    if (key > 0 && key < 6) {     
      this.answer(this.currentWords[key-1]);
    }
  }

  public words: IWord[];
  public wordsForGame: IWord[];
  public wrongWords: IWord[]; 
  public index: number;
  public currentWords: IWord[];
  public sound: HTMLAudioElement;
  public wrongSound: HTMLAudioElement;
  public correctSound: HTMLAudioElement;
  private userWords: userWord[];
  public wrongAnswers: IWord[];
  public correctAnswers: IWord[];

  constructor(private audioService: AudioService, private api: ApiService) {
    this.display = new EventEmitter<number>();
    this.words = this.audioService.words;
    this.wordsForGame = [];
    this.index = 0;
    this.currentWords = [];
    this.wrongSound = new Audio('assets/mistake.mp3');
    this.correctSound = new Audio('assets/rigthanswe.mp3');
    this.wrongAnswers = [];
    this.correctAnswers = [];
  }

  ngOnInit(): void {
    this.userWords = this.audioService.userWords;
    this.getWordsForGame();
    this.getCurrentWords();
  }

  private getIdx(): number {
    return Math.floor(Math.random() * this.words.length);
  }

  public getWordsForGame(): void {
    for (let i = 0; i < 10; i++) {
      let word: IWord[] = this.words.splice(this.getIdx(), 1);
      this.wordsForGame.push(...word);
    }
    this.wordsForGame.map(elem => elem.isHidden = false);
  }

  public getWrongWords(): void {
    this.wrongWords = [];
    for (let i = 0; i < 4; i++) {
      let word: IWord[] = this.words.splice(this.getIdx(), 1);
      this.wrongWords.push(...word);
    }
  }

  public getCurrentWords(): void {
    this.currentWords = [];
    this.getWrongWords();
    this.currentWords.push(this.wordsForGame[this.index], ...this.wrongWords);
    this.currentWords.sort(() => Math.random() - 0.5);
    this.sound = new Audio(`https://app-learnwords-rslang.herokuapp.com/${this.wordsForGame[this.index].audio}`);
    this.sound.play();
    this.index++;    
  }

  public answer(word: IWord): void {
    let userWord = this.userWords.find((word: userWord) => word.wordId === this.wordsForGame[this.index - 1].id);
    if (word.id === this.wordsForGame[this.index - 1].id) {
      this.correctAnswers.push(word);
      this.correctSound.play();
      if (!userWord) {
        this.api.createUserWord(localStorage.getItem('userId')!, this.wordsForGame[this.index - 1].id, {difficulty: 'false', optional: {}}).subscribe();
        this.updateStudiedWords(true);
      } else if (userWord.difficulty === 'true') {
        this.api.updateUserWord(localStorage.getItem('userId')!, this.wordsForGame[this.index - 1].id, {difficulty: 'false', optional: {}}).subscribe();
        this.updateStudiedWords(true);
      }  
    } else {
      this.wrongAnswers.push(word);
      this.wrongSound.play();
      if (!userWord) {
        this.api.createUserWord(localStorage.getItem('userId')!, this.wordsForGame[this.index - 1].id, {difficulty: 'true', optional: {}}).subscribe();
      } else if (userWord.difficulty === 'false') {
        this.api.deleteUserWord(localStorage.getItem('userId')!, this.wordsForGame[this.index - 1].id).subscribe();
        this.updateStudiedWords(false);
      }  
    }
    this.wordsForGame[this.index - 1].isHidden = true;
    if (this.index < 10) {
      setTimeout(() => this.getCurrentWords(), 1000);
    } else {
      this.audioService.wrongAnswers = this.wrongAnswers;
      this.audioService.correctAnswers = this.correctAnswers;
      setTimeout(() => this.display.emit(3), 1000);
    }
  }

  notToKnow() {
    let userWord = this.userWords.find((word: userWord) => word.wordId === this.wordsForGame[this.index - 1].id);
    if (!userWord) {
      this.api.createUserWord(localStorage.getItem('userId')!, this.wordsForGame[this.index - 1].id, {difficulty: 'true', optional: {}}).subscribe();
    } else if (userWord.difficulty === 'false') {
      this.api.deleteUserWord(localStorage.getItem('userId')!, this.wordsForGame[this.index - 1].id).subscribe();
      this.updateStudiedWords(false);
    }
    this.wordsForGame[this.index - 1].isHidden = true;
    if (this.index < 10) {
      setTimeout(() => this.getCurrentWords(), 1000);
    } else {
      this.audioService.wrongAnswers = this.wrongAnswers;
      this.audioService.correctAnswers = this.correctAnswers;
      setTimeout(() => this.display.emit(3), 1000);
    }
  }

  public playSound() {
    this.sound.play();
  }

  private updateStudiedWords(add: boolean) {
    if (add) {
      localStorage.setItem('studWordsA', `${(+localStorage.getItem('studWordsA')! || 0) + 1}`)
    } else {
      localStorage.setItem('studWordsA', `${+localStorage.getItem('studWordsA')! - 1}`)
    }
  }
}
