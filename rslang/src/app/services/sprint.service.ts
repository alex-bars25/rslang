import { Injectable } from '@angular/core';
import { IWord } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class SprintService {
  public words: IWord[];
  public wrongAnswers: IWord[];
  public correctAnswers: IWord[];
  public score: number;

  constructor() {
    this.words = [];
    this.wrongAnswers = [];
    this.correctAnswers = [];
    this.score = 0;
  }
}
