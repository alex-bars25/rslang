import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWord } from '../../../../../types/index';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-simple-word-block',
  templateUrl: './simple-word-block.component.html',
  styleUrls: ['./simple-word-block.component.scss']
})
export class SimpleWordBlockComponent implements OnInit {

  constructor(private api: ApiService) {}

  @Input() wordInstance!: IWord;

  @Output() sectionUpdate = new EventEmitter<number>();

  userId: string = localStorage.getItem('userId')!;
  
  word: string;


  updateBlock() {
    this.word = `${this.wordInstance.word} - ${this.wordInstance.wordTranslate}`;
  }

  excludedFromStud() {
    this.api.deleteUserWord(this.userId, this.wordInstance.id).subscribe({
      complete: () => {
        this.sectionUpdate.emit(1);
      }
  });

  }

  ngOnInit(): void {
    this.updateBlock();
  }
}
