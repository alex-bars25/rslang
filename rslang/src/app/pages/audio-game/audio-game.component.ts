import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {IWord} from "../../../types";

@Component({
  selector: 'app-audio-game',
  templateUrl: './audio-game.component.html',
  styleUrls: ['./audio-game.component.scss']
})
export class AudioGameComponent implements OnInit {

  count: number = 1;
  display:number = 1;
  group: number;
  words: IWord[] | [] = [];
  rightAnswersForStatistic: string[];
  wrongAnswersForStatistic: string[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }


  forRigthAnswers(answers: string[]) {
    this.rightAnswersForStatistic = answers;
  }

  forWrongAnswers(answers: string[]) {
    this.wrongAnswersForStatistic = answers;
  }

  changeGroup(group:number) {
    const page: number = Math.ceil(Math.random() * 29 - 1);
    this.getLevelWords(group, page)
    this.display = 2;
  }

  countCheck(count:number) {
      this.display = 3;
  }

  getLevelWords(group:number, page: number): void {
    this.api.getWords(group, page)
      .subscribe((resp:IWord[]) =>  {
        this.words = resp;
      });
  }

  repeatGame(value: boolean) {
    if(value) {
      this.display = 1;
    }
  }
}
