import { Injectable } from '@angular/core';
import { IWord, userWord } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class SprintService {
  public words: IWord[];
  public wrongAnswers: IWord[];
  public correctAnswers: IWord[];
  public score: number;
  public userWords: userWord[];

  constructor() {
    this.words = [];
    this.wrongAnswers = [];
    this.correctAnswers = [];
    this.score = 0;
    this.userWords = [];
  }
}
