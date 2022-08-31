import { Component, OnInit } from '@angular/core';
import { IWord } from '../../../types/index';
import { getWords } from '../../services/api';

@Component({
  selector: 'app-textbook',
  templateUrl: './textbook.component.html',
  styleUrls: ['./textbook.component.scss']
})
export class TextbookComponent implements OnInit {
  group: number = 0;
  page: number = 1;
  shadow: object =  {'box-shadow': 'inset 0 0 100px rgb(154, 243, 207)'};
  words: IWord[] | [] =[];

  changeSection ([color, group]: [string, number]): void{
    this.shadow =  {'box-shadow': `inset 0 0 100px ${color}`};
    this.group = group;
    this.updateWordsList();
  }

  toRight(): void {
    if (this.page < 30) this.page++;
    this.updateWordsList();
  }

  toLeft(): void {
    if (this.page > 1) this.page--;
    this.updateWordsList();
  }

  updateWordsList: () => void  = (): void => {
    (async () => {
      this.words = await getWords(this.group, this.page - 1);
      })();
    }

  ngOnInit(): void {
    this.updateWordsList();
  }

}
