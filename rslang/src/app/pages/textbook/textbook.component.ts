import { Component, OnInit } from '@angular/core';
import { IWord, userWord } from '../../../types/index';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-textbook',
  templateUrl: './textbook.component.html',
  styleUrls: ['./textbook.component.scss']
})
export class TextbookComponent implements OnInit {

  constructor(private api: ApiService) {}

  userId: string = localStorage.getItem('userId')!;
  group: number = 0;
  page: number = 1;
  shadow: object =  {'box-shadow': 'inset 0 0 100px rgb(154, 243, 207)'};
  words: IWord[] | [] =[];

  changeSection ([color, group]: [string, number]): void{
    this.shadow =  {'box-shadow': `inset 0 0 100px ${color}`};
    this.group = group;
    localStorage.setItem('group', `${this.group}`)
    this.page = 1;
    this.updateWordsList();
  }

  toRight(): void {
    if (this.page < 30) this.page++;
    this.updateWordsList();
    localStorage.setItem('page', `${this.page}`)
  }

  toLeft(): void {
    if (this.page > 1) this.page--;
    this.updateWordsList();
    localStorage.setItem('page', `${this.page}`)
  }

  updateWordsList: () => void  = (): void => {
    this.api.getWords(this.group, this.page -1).subscribe((words: IWord[]) => this.words = words)
    }

    
    createDiffWord: (wordId: string) => void  = (wordId): void => {
      this.api.createUserWord(this.userId, wordId, 
      { "difficulty": "true", "optional": {}}
      ).subscribe();
    }

    createStudWord: (wordId: string) => void  = (wordId): void => {
      this.api.createUserWord(this.userId, wordId, 
      { "difficulty": "false", "optional": {}}
      ).subscribe();
    }

    updateToStudWord: (wordId: string) => void  = (wordId): void => {
      this.api.updateUserWord(this.userId, wordId, 
      { "difficulty": "false", "optional": {}}
      ).subscribe();
    }

  ngOnInit(): void {
    if (!localStorage.getItem('page')) {
       localStorage.setItem('page', '1');
     } else {
       this.page = +localStorage.getItem('page')!;
     }
     if (!localStorage.getItem('group')) {
      localStorage.setItem('group', '0');
    } else {
      this.group = +localStorage.getItem('group')!;
    }
    this.updateWordsList();
  }

}
