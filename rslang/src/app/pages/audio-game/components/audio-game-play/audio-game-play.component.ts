import {Component, Input, OnInit} from '@angular/core';
import {IWord} from "../../../../../types";

@Component({
  selector: 'app-audio-game-play',
  templateUrl: './audio-game-play.component.html',
  styleUrls: ['./audio-game-play.component.scss']
})
export class AudioGamePlayComponent implements OnInit {

  @Input() wordInstance!: IWord[];

  count: number = 0;
  visibility: boolean = true;
  rightV: boolean = true;

  statisticRightAnswers: Array<string> = [];
  statisticWrongAnswers: Array<string> = [];

  audio: HTMLAudioElement = new Audio();
  autoplay: boolean = true;

  wordRightDisp: IWord[];
  wordSound: string;
  wordsAudio: IWord[];

  onlyRightW: string;



  constructor() { }

  ngOnInit(): void {
    this.getWord();
  }

  getWord() {
    setTimeout(() => {
      this.wordsAudio = this.wordInstance;
      this.updateBlock(this.wordsAudio)
    }, 1000)
  }

  updateBlock(words: IWord[]) {
    let copyArr: IWord[] =  [...words];

    copyArr = copyArr.sort((a,b) =>{
      if(a.word > b.word) {
        return 1;
      }
      if(a.word < b.word) {
        return -1;
      }
      return 0;
    })
    const curArr = copyArr.slice(0,5);
    const rightWord = curArr[3];
    this.onlyRightW = rightWord.wordTranslate;
    this.wordSound = `https://app-learnwords-rslang.herokuapp.com/${rightWord.audio}`;
    this.sound();
    this.wordRightDisp = curArr;
  }

  checkWord(word: string, i: number) {

    if (word === this.onlyRightW) {
      console.log('WWWw')
      this.statisticRightAnswers.push(word);

    }
    else {
      this.visibility = false;
      this.statisticWrongAnswers.push(word);
    }
  }

  sound() {
    const play = (url: string): void => {
      this.audio.src = url;
      const audio = this.audio;
      setTimeout(function () {
        audio.play();
      }, 150);
    }
    if(this.autoplay) {
      play(this.wordSound);
    }
  }

}
