import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SprintService } from 'src/app/services/sprint.service';
import { IWord } from 'src/types';

@Component({
  selector: 'app-sprint-intro',
  templateUrl: './sprint-intro.component.html',
  styleUrls: ['./sprint-intro.component.scss']
})
export class SprintIntroComponent implements OnInit {
  @Output()
  gameStatus: EventEmitter<number>;
  
  public level: number;

  constructor(private sprintService: SprintService, private api: ApiService) {
    this.gameStatus = new EventEmitter<number>();
    this.level = 1;
  }

  ngOnInit(): void {
  }

  public increaseLevel(): void {
    this.level < 6 ? this.level++ : this.level;
  }

  public decreaseLevel(): void {
    this.level > 1 ? this.level-- : this.level;
  }

  public startGame(): void {
    this.gameStatus.emit(2);
    this.getWords();
  }

  private getWords(): void {
    for (let page = 0; page < 30; page++) {
      this.api.getWords(this.level - 1, page).subscribe((words: IWord[]) => {
        this.sprintService.words.push(...words);
      });  
    }
  }

}
