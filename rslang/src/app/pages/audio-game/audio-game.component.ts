import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {IWord} from "../../../types";
import {AudioService} from "../../services/audio.service";

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
  rightAnswersForStatistic: IWord[];
  wrongAnswersForStatistic: IWord[];

  constructor(private api: ApiService, private AudioService: AudioService) { }

  ngOnInit(): void {
    this.userWords();
  }


  forRigthAnswers(answers: IWord[]) {
    this.rightAnswersForStatistic = answers;
  }

  forWrongAnswers(answers: IWord[]) {
    this.wrongAnswersForStatistic = answers;
  }

  changeGroup(group:number) {
    for (let i = 0; i < 2; i++) {
      const page: number = Math.ceil(Math.random() * 29 - 1);
      this.getLevelWords(group, page)
    }

    this.display = 2;
  }

  countCheck(count:number) {
      this.display = 3;
  }

  getLevelWords(group:number, page: number): void {
    this.api.getWords(group, page)
      .subscribe((resp:IWord[]) =>  {
        this.words = resp;
        this.AudioService.wordForAudio.push(...resp)
      });
  }

  userWords() {
    this.api.getUserWords(localStorage.getItem('userId')!).subscribe((data) => {
        this.AudioService.userWords = data;
    })
  }

  repeatGame(value: boolean) {
    if(value) {
      this.display = 1;
    }
  }
}
