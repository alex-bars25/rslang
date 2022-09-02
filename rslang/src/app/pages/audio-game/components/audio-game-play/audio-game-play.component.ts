import {Component, Input, OnInit} from '@angular/core';
import {IWord} from "../../../../../types";

@Component({
  selector: 'app-audio-game-play',
  templateUrl: './audio-game-play.component.html',
  styleUrls: ['./audio-game-play.component.scss']
})
export class AudioGamePlayComponent implements OnInit {

  @Input() wordInstance!: IWord[];

  audio: HTMLAudioElement = new Audio();
  autoplay: boolean = true;

  wordRightDisp: IWord[];
  wordSound: string;
  wordsAudio: IWord[];

  constructor() { }

  ngOnInit(): void {
    this.getWord()
  }

  getWord() {
    setTimeout(() => {
      this.wordsAudio = this.wordInstance;
      this.updateBlock(this.wordsAudio)
    }, 1500)
  }

  updateBlock(words: IWord[]) {
    console.log(words)
    words.map((word, ind) => {
    });

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

    this.wordSound = `https://app-learnwords-rslang.herokuapp.com/${rightWord.audio}`;

    this.wordRightDisp = curArr;
    console.log(curArr)
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
      // this.autoplay = false;
      play(this.wordSound);

    }
  }



}
