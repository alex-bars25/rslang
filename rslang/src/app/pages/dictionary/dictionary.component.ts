import { Component, OnInit } from '@angular/core';
import { IWord, userWord } from '../../../types/index';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  constructor(private api: ApiService) {}

  userId: string = localStorage.getItem('userId')!;
  group: number = 0;
  page: number = 1;
  shadow: object =  {'box-shadow': 'inset 0 0 100px #4eb1e2'};
  studWords: IWord[] =[];
  diffWords: IWord[] =[];

  changeSection ([color, group]: [string, number]): void{
    this.shadow =  {'box-shadow': `inset 0 0 100px ${color}`};
    if (group === 0) {
    this.group = group;
    this.updateDiffWordsList();
    this.studWords = [];
    }
    if (group === 1) {
    this.group = group;
    this.updateStudiesWordsList();
    this.diffWords = [];
    }
  }

  sectionUpdate (group: number): void {
    if (group === 0) {
    this.diffWords = [];
    this.updateDiffWordsList();
    }

    if (group === 1) {
      this.studWords = [];
      this.updateStudiesWordsList();
      }
  }

  updateDiffWordsList: () => void  = (): void => {
    this.api.getUserWords(this.userId).subscribe((userWords: userWord[]) => {
      userWords.forEach((word): void => {
        if (word.difficulty === "true") {
          this.api.getWord(word.wordId).subscribe((word: IWord) => this.diffWords.push(word));
        }
      });
    })
    }

  updateStudiesWordsList: () => void  = (): void => {
    this.api.getUserWords(this.userId).subscribe((userWords: userWord[]) => {
      userWords.forEach((word): void => {
        if (word.difficulty === "false") {
          this.api.getWord(word.wordId).subscribe((word: IWord) => this.studWords.push(word));
        }
      });
    })
  }

  ngOnInit(): void {
    this.updateDiffWordsList();
  }

}
