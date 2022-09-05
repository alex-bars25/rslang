import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IWord, userWord } from '../../../types/index';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  constructor(private api: ApiService, private router: Router) { }

  userId: string = localStorage.getItem('userId')!;

  valueWordsGeneral: string = '0';
  valueWordsToday: string = '0';
  progressPercent: string = '0%';
  progress: {'width':string} = {'width': `${this.progressPercent}`};

  updateGeneralWords(){
    this.api.getUserWords(this.userId).subscribe((userWords: userWord[]) => {
      userWords.forEach((word): void => {
        if (word.difficulty === "false") {
          this.valueWordsGeneral = (+this.valueWordsGeneral + 1).toString();
          this.progressPercent = `${((+this.valueWordsGeneral/3600)*100).toFixed(2)}%`;
        }
      });
      this.progress = {'width': `${this.progressPercent}`};
    })
  }

  studWordsS: string = '0';
  recordS: string = '0';
  trueAnswersPercentS: number = 0;

  updateSprint(){
    if(localStorage.getItem('studWordsS')){
      this.studWordsS = localStorage.getItem('studWordsS')!;
      }
  
    if(localStorage.getItem('recordS')){
      this.recordS = localStorage.getItem('recordS')!;
    }

    if(localStorage.getItem('trueAnswersS') && localStorage.getItem('falseAnswersS')){
      this.trueAnswersPercentS = Math.ceil((+localStorage.getItem('trueAnswersS')!/
      (+localStorage.getItem('trueAnswersS')! + +localStorage.getItem('falseAnswersS')!)) * 100
      );
    }
  }

  studWordsA: string = '0';
  trueAnswersPercentA: number = 0;

  updateAudioGame(){
    if(localStorage.getItem('studWordsA')){
      this.studWordsA = localStorage.getItem('studWordsA')!;
      }

    if(localStorage.getItem('trueAnswersA') && localStorage.getItem('falseAnswersA')){
      this.trueAnswersPercentA = Math.ceil((+localStorage.getItem('trueAnswersA')!/
      (+localStorage.getItem('trueAnswersA')! + +localStorage.getItem('falseAnswersA')!)) * 100
      );
    }
  }

  ngOnInit(): void {
    this.valueWordsToday = localStorage.getItem('studWords')!;
    this.valueWordsGeneral = '0';
    this.updateGeneralWords();
    this.updateSprint();
    this.updateAudioGame();
  }

}
