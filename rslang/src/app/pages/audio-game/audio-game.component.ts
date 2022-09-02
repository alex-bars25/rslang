import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {IWord} from "../../../types";

@Component({
  selector: 'app-audio-game',
  templateUrl: './audio-game.component.html',
  styleUrls: ['./audio-game.component.scss']
})
export class AudioGameComponent implements OnInit {

  display:number = 1;
  group: number;
  words: IWord[] | [] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }


  changeGroup(group:number) {
    const page: number = Math.ceil(Math.random() * 29 - 1);
    this.getLevelWords(group, page)
    this.display = 2;
  }


  getLevelWords(group:number, page: number): void {
    this.api.getWords(group, page)
      .subscribe((resp:IWord[]) =>  {
        this.words = resp;
      });
  }

}
