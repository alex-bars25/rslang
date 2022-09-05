import { Injectable } from '@angular/core';
import {IWord, userWord} from "../../types";


@Injectable({
  providedIn: 'root'
})


export class AudioService {
  public words: IWord[];
  public userWords: userWord[];
  public wrongAnswers: IWord[];
  public correctAnswers: IWord[];

  constructor() {
    this.words = [];
    this.userWords = [];
    this.wrongAnswers = [];
    this.correctAnswers = [];
  }

}
