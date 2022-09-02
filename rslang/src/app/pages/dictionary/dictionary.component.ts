import { Component, OnInit } from '@angular/core';
import { IWord } from '../../../types/index';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  constructor(private api: ApiService) {}

  group: number = 0;
  page: number = 1;
  shadow: object =  {'box-shadow': 'inset 0 0 100px #4eb1e2'};
  words: IWord[] | [] =[];

  changeSection ([color, group]: [string, number]): void{
    this.shadow =  {'box-shadow': `inset 0 0 100px ${color}`};
    if (group === 0) {
      //updateDiffWordsList with getDiffWords
    this.group = group;
    this.updateDiffWordsList();
    }
    if (group === 1) {
      //updateStudiesWordsList with getStudiesWords
    this.group = group;
    this.updateStudiesWordsList();
    }

  }

  updateDiffWordsList: () => void  = (): void => {
    // put getDiffWords
    this.api.getWords(this.group, this.page -1).subscribe((words: IWord[]) => this.words = words)
    }

  updateStudiesWordsList: () => void  = (): void => {
    // put getStudiesWords
    this.api.getWords(this.group, this.page -1).subscribe((words: IWord[]) => this.words = words)
  }

  ngOnInit(): void {
    this.updateDiffWordsList();
  }

}
