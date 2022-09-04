import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IWord} from "../../../../../types";

@Component({
  selector: 'app-audio-game-play',
  templateUrl: './audio-game-play.component.html',
  styleUrls: ['./audio-game-play.component.scss']
})
export class AudioGamePlayComponent implements OnInit {

  @Input() wordInstance: IWord[];
  @Output() countS = new EventEmitter <number>();
  @Output() rigthAnswerS = new EventEmitter <IWord[]>();
  @Output() wrongAnswerS = new EventEmitter <IWord[]>();

  @HostListener('document: keyup', ['$event.key'])
  onKeyUp(key: number) {
    this.keyAnswer = +key;
    const arr: number[] = [1,2,3,4,5]
    if(arr.includes(this.keyAnswer)) {
      this.keyObj = this.fiveWords[this.keyAnswer - 1];
      this.checkWord(this.keyObj)
    }
  }

  keyObj: IWord | [] = [];
  countAns: number = 0;
  count:number = 0;
  statisticRightAnswers:IWord[] = [];
  statisticWrongAnswers:IWord[] = [];
  audio: HTMLAudioElement = new Audio();
  audioRightAnswer: HTMLAudioElement = new Audio();
  audioRightPath: string = './assets/rigthanswe.mp3'
  audioWrongAnswer: HTMLAudioElement = new Audio();
  audioWrongPath: string = './assets/mistake.mp3'
  flagAnswer: boolean = true;
  autoplay: boolean = true;
  wordSound: string;
  wordsforToggle: IWord[];
  copyWords: IWord[];
  fiveWords: IWord[];
  currentWord: IWord;
  firstSlice:number = 0;
  secondSlice:number = 5;
  keyAnswer: number;

  constructor() { }

  ngOnInit(): void {
    this.getWord();
  }

  countAnswers() {
    if(this.countAns === 6) {
      this.countS.emit(this.countAns);
      this.rigthAnswerS.emit(this.statisticRightAnswers);
      this.wrongAnswerS.emit(this.statisticWrongAnswers);
    }
    this.countAns++;
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
    if(this.secondSlice > 21) {
      this.firstSlice = 0;
      this.secondSlice = 5;
      words.sort((a,b) =>{
        if(a.word < b.word) {
          return 1;
        }
        if(a.word > b.word) {
          return -1;
        }
        return 0;
      })
      this.fiveWords = words.slice(this.firstSlice, this.secondSlice);
      this.firstSlice += 5;
      this.secondSlice += 5;
      this.sendFiveWords(this.fiveWords);
    }
    else {
      this.fiveWords = words.slice(this.firstSlice, this.secondSlice);
      this.fiveWords.map((elem, ind) => {
        let index:number = ind;
        index = index + 1;
        elem.keyId = index;
      })
      this.firstSlice += 5;
      this.secondSlice += 5;
      this.sendFiveWords(this.fiveWords);
    }
  }

  sendFiveWords(words: IWord[]) {
    const rightWord = words[Math.floor(Math.random() * 5)];
    this.currentWord = rightWord;
    this.wordSound = `https://app-learnwords-rslang.herokuapp.com/${rightWord.audio}`;
    if(this.count < 7) {
      this.sound();
    }
  }


  toggle(id: string) {
    this.wordsforToggle.map(word => {
      if(word.id === id) {
        word.isHidden = true;
      }
    })
  }

  notToKnow() {
    this.count++;
    this.toggle(this.currentWord.id)
    const play = (url: string): void => {
      this.audioWrongAnswer.src = url;
      const audio = this.audioWrongAnswer;
      setTimeout(function () {
        audio.play();
      }, 150);
    }
    if(this.flagAnswer) {
      play(this.audioWrongPath)
    }
    const changeWords = () => {
      this.sliceArr(this.copyWords);

    }
    setTimeout(changeWords, 1000)
  }


  checkWord(wordF?: IWord) {
    this.countAnswers();
    this.count++
    const changeWords = () => {
      this.sliceArr(this.copyWords)
    }
    setTimeout(changeWords, 1000);
    this.wordsforToggle.map(word => {
      word.isHidden = false;
    });
      if(wordF?.id) {
          if ("id" in this.currentWord && wordF?.id === this.currentWord.id) {
            this.toggle(wordF.id);
            this.statisticRightAnswers.push(wordF);
            const play = (url: string): void => {
              this.audioRightAnswer.src = url;
              const audio = this.audioRightAnswer;
              setTimeout(function () {
                audio.play();
              }, 150);
            }
            if(this.flagAnswer) {
              play(this.audioRightPath)
            }

        else {
          this.toggle(this.currentWord.id)
          this.statisticWrongAnswers.push(wordF);
          const play = (url: string): void => {
            this.audioWrongAnswer.src = url;
            const audio = this.audioWrongAnswer;
            setTimeout(function () {
              audio.play();
            }, 150);
          }
          if(this.flagAnswer) {
            play(this.audioWrongPath)
          }
        }
      }
    }
  }

  sound() {
    const play = (url: string): void => {
      this.audio.src = url;
      const audio = this.audio;
      setTimeout(function () {
        audio.play();
      }, 1000);
    }
    if(this.autoplay) {
      play(this.wordSound);
    }
  }

}
