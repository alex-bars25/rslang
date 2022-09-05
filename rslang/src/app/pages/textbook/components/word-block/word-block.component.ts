import { Component, OnInit, Input } from '@angular/core';
import { IWord, userWord } from '../../../../../types/index';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-word-block',
  templateUrl: './word-block.component.html',
  styleUrls: ['./word-block.component.scss']
})
export class WordBlockComponent implements OnInit {

  @Input() wordInstance!: IWord ;
  @Input() createDiffWord: (wordId: string) => void;
  @Input() createStudWord: (wordId: string) => void;
  @Input() updateToStudWord: (wordId: string) => void;

  constructor(private api: ApiService) {}

  userId: string = localStorage.getItem('userId')!;

  audioLogo: string = "./assets/volume_Icon.svg";
  audio: HTMLAudioElement = new Audio();
  autoplay: boolean = true;

  displayColor: object = {'background-color': 'rgb(245, 215, 215, 0)'}; 
  displayText: string = ''
  
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

  checkWord() {
    this.api.getUserWords(this.userId).subscribe((userWords: userWord[]) => {
      userWords.forEach((word): void => {
        if (word.wordId === this.wordInstance.id) {
          this.displayColor = {'background-color': 'rgb(245, 215, 215)'};
          if (word.difficulty === "true") {
            this.displayText = 'СЛОЖНОЕ';
          } else {
            this.displayText = 'ИЗУЧЕНОЕ';
          }
        };
      });
    });
  }

  sound() {
    let count = 0;
    const play = (url: string): void => {
      this.audio.src = url;
      const audio = this.audio; 
      this.audioLogo = "assets/mute.png";
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
          this.audioLogo = "assets/volume_Icon.svg";
        }
      });
    }
    if (!this.autoplay && this.audio.currentTime > 0 && !this.audio.paused && !this.audio.ended ) {
      this.audio.currentTime = 0;
      this.audio.pause();
      this.autoplay = true;
      this.audioLogo = "assets/volume_Icon.svg";
    }
  }

  putToDif() {
    if (this.displayText !== 'ИЗУЧЕНОЕ' && this.displayText !== 'СЛОЖНОЕ') {
    this.displayText = 'СЛОЖНОЕ';
    this.displayColor = {'background-color': 'rgb(245, 215, 215)'};
    this.createDiffWord(this.wordInstance.id);
    }
  }

  putToStud() {
    if (this.displayText !== 'ИЗУЧЕНОЕ' && this.displayText !== 'СЛОЖНОЕ') {
      this.createStudWord(this.wordInstance.id);
    }
    if (this.displayText === 'СЛОЖНОЕ') {
      this.updateToStudWord(this.wordInstance.id);
    }
    this.displayText = 'ИЗУЧЕНОЕ';
    this.displayColor = {'background-color': 'rgb(245, 215, 215)'};
  }

  ngOnInit(): void {
    this.checkWord();
    this.updateBlock();
  }

}
