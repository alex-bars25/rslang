import {Component, Input, OnInit} from '@angular/core';
import {IWord} from "../../../../../types";

@Component({
  selector: 'app-audio-game-play',
  templateUrl: './audio-game-play.component.html',
  styleUrls: ['./audio-game-play.component.scss']
})
export class AudioGamePlayComponent implements OnInit {

  @Input() wordInstance: IWord[];

  count: number = 0;
  statisticRightAnswers: IWord[] = [];
  statisticWrongAnswers: IWord[] = [];

  audio: HTMLAudioElement = new Audio();
  autoplay: boolean = true;

  wordSound: string;
  wordsAudio: IWord[];


  wordsforToggle: IWord[];

  copyWords: IWord[];
  fiveWords: IWord[];
  currentWord:IWord | {} = {};

  firstSlice:number = 0;
  secondSlice:number = 5;

  constructor() { }

  ngOnInit(): void {
    this.getWord();
  }

  getWord() {
    setTimeout(() => {
      this.createBlock(this.wordInstance)
    }, 1000)
  }

  createBlock(words: IWord[]) {
    this.copyWords = [...words];
    this.copyWords.map(elem => {
      elem.isHidden = false;
    })

    this.wordsforToggle = [...this.copyWords];
    this.sliceArr(this.copyWords)
  }

  sliceArr(words:IWord[]) {
    if(this.secondSlice > 19) {
      this.firstSlice = 0;
      this.secondSlice = 5;
      words.sort((a,b) =>{
        if(a.word > b.word) {
          return 1;
        }
        return 0;
      })
      this.fiveWords = words.slice(this.firstSlice, this.secondSlice);
      this.firstSlice += 3;
      this.secondSlice += 3;
      console.log(this.fiveWords,' FIVE')
      this.sendFiveWords(this.fiveWords);
    }
    this.fiveWords = words.slice(this.firstSlice, this.secondSlice);
    this.firstSlice += 3;
    this.secondSlice += 3;
    console.log(this.fiveWords,' FIVE')
    this.sendFiveWords(this.fiveWords);
  }


  sendFiveWords(words: IWord[]) {
    const rightWord = words[Math.floor(Math.random() * 5)];
    this.currentWord = rightWord;
    this.wordSound = `https://app-learnwords-rslang.herokuapp.com/${rightWord.audio}`;
    this.sound();
  }


  toggle(id: string) {
    this.wordsforToggle.map(word => {
      if(word.id === id) {
        word.isHidden = true;
      }
    })
  }

  checkWord(word: string, id: string) {
    const changeWords = () => this.sliceArr(this.copyWords)

    setTimeout(changeWords, 1000)

    if(id) {
      if ("id" in this.currentWord && id === this.currentWord.id) {
        console.log('Yeah')
        console.log(id);
        this.toggle(id)
        this.statisticRightAnswers.push();
      }
      else {
        console.log('no')
        this.statisticWrongAnswers.push();
      }
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
