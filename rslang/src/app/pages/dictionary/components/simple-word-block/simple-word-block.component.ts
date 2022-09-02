import { Component, OnInit, Input } from '@angular/core';
import { IWord } from '../../../../../types/index';

@Component({
  selector: 'app-simple-word-block',
  templateUrl: './simple-word-block.component.html',
  styleUrls: ['./simple-word-block.component.scss']
})
export class SimpleWordBlockComponent implements OnInit {

  @Input() wordInstance!: IWord;
  
  word: string;


  updateBlock() {
    this.word = `${this.wordInstance.word} - ${this.wordInstance.wordTranslate}`;
  }

  excludedFromStud() {
    // excludedFromStud
  }

  ngOnInit(): void {
    this.updateBlock();
  }
}
