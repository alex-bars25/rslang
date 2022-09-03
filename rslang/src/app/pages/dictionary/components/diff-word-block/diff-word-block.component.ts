import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IWord } from '../../../../../types/index';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-diff-word-block',
  templateUrl: './diff-word-block.component.html',
  styleUrls: ['./diff-word-block.component.scss']
})
export class DiffWordBlockComponent implements OnInit {
  
  constructor(private api: ApiService) {}

  @Input() wordInstance!: IWord;

  userId: string = localStorage.getItem('userId')!;

  audioLogo: string = "./assets/volume_Icon.svg";
  audio: HTMLAudioElement = new Audio();
  autoplay: boolean = true;

  displayColor: object = {'background-color': 'rgb(245, 215, 215)'}; 
  displayText: string = 'СЛОЖНОЕ'
  
  img: object;
  word: string;
  meaningEn: string;
  meaningRu: string;
  exampleEn: string;
  exampleRu: string;
  wordSound: string;
  meaningSound: string;
  exampleSound: string;

  updateBlock() {
    this.img =  {'background-image': `url(https://app-learnwords-rslang.herokuapp.com/${this.wordInstance.image})`};
    this.word = `${this.wordInstance.word} - ${this.wordInstance.transcription} - ${this.wordInstance.wordTranslate}`;
    this.meaningEn = this.wordInstance.textMeaning;
    this.meaningRu = this.wordInstance.textMeaningTranslate;
    this.exampleEn = this.wordInstance.textExample;
    this.exampleRu = this.wordInstance.textExampleTranslate;
    this.wordSound = `https://app-learnwords-rslang.herokuapp.com/${this.wordInstance.audio}`;
    this.meaningSound = `https://app-learnwords-rslang.herokuapp.com/${this.wordInstance.audioMeaning}`;
    this.exampleSound = `https://app-learnwords-rslang.herokuapp.com/${this.wordInstance.audioExample}`;
  }

  sound() {
    let count = 0;
    const play = (url: string): void => {
      this.audio.src = url;
      const audio = this.audio; 
      this.audioLogo = "./assets/mute.png";
      setTimeout(function () {
        audio.play();
      }, 150);
    }

    if (this.autoplay) {
      this.autoplay = false;
      play(this.wordSound);
      this.audio.addEventListener('ended',() => {
        if (count === 0) {
          count++;
          play(this.meaningSound);
        } else if (count === 1) {
          count++;
          play(this.exampleSound);
        } else if (count === 2){
          this.autoplay = true;
          this.audioLogo = "./assets/volume_Icon.svg";
        }
      });
    }
    if (!this.autoplay && this.audio.currentTime > 0 && !this.audio.paused && !this.audio.ended ) {
      this.audio.pause();
      this.audio.currentTime = 0; 
      this.autoplay = true;
      this.audioLogo = "./assets/volume_Icon.svg";
    }
  }

  updateToStudWord: (wordId: string) => void  = (wordId): void => {
    this.api.updateUserWord(this.userId, wordId, 
    { "difficulty": "false", "optional": {}}
    ).subscribe({
      complete: () => {
        this.sectionUpdate.emit(0);
      }
  });
  }

  excludedFromDiff()  {
    this.api.deleteUserWord(this.userId, this.wordInstance.id).subscribe({
      complete: () => {
        this.sectionUpdate.emit(0);
      }
  });
  }

  @Output() sectionUpdate = new EventEmitter<number>();

  putToStud() {
    if (this.displayText === 'СЛОЖНОЕ') {
      this.updateToStudWord(this.wordInstance.id);
    }
  }

  ngOnInit(): void {
    this.updateBlock();
  }
}
