import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IWord, userWord} from "../../../../../types";
import {AudioService} from "../../../../services/audio.service";
import {ApiService} from "../../../../services/api.service";

@Component({
  selector: 'app-audio-game-play',
  templateUrl: './audio-game-play.component.html',
  styleUrls: ['./audio-game-play.component.scss']
})
export class AudioGamePlayComponent implements OnInit {

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

  wordsFromService: IWord[];
  userWordsFromService: userWord[];

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
  fiveWords: IWord[] = [];
  currentWord: IWord;
  firstSlice:number = 0;
  secondSlice:number = 5;
  keyAnswer: number;

  constructor(private AudioService: AudioService, private api: ApiService) { }

  ngOnInit(): void {
    this.wordsFromService = this.AudioService.wordForAudio;
    console.log(this.wordsFromService)

    this.userWordsFromService = this.AudioService.userWords;
    this.createBlock(this.wordsFromService);


  }

  countAnswers() {
    if(this.countAns === 6) {
      this.countS.emit(this.countAns);
      this.rigthAnswerS.emit(this.statisticRightAnswers);
      this.wrongAnswerS.emit(this.statisticWrongAnswers);
    }
    this.countAns++;
  }

  createBlock(words: IWord[]) {
    words.map(elem => {
      elem.isHidden = false;
    });
    this.wordsforToggle = [...words];
    this.sliceArr(words)
  }

  sliceArr(words:IWord[]) {

    this.firstSlice = 0;
    this.secondSlice = 5;
    console.log(words.slice(0,4),'WoRds')

    this.fiveWords = words.slice(this.firstSlice, this.secondSlice);

    // for (let i = this.firstSlice; i < this.secondSlice; i++) {
    //   this.fiveWords.push(words[i])
    // }
    console.log('five', this.fiveWords)

    this.sendFiveWords(this.fiveWords);

    this.firstSlice += 5;
    this.secondSlice += 5;

  }

  sendFiveWords(words: IWord[]) {
    const rightWord = words[Math.floor(Math.random() * 5)];
    this.currentWord = rightWord;
    this.wordSound =  `https://app-learnwords-rslang.herokuapp.com/${rightWord.audio}`;
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


  checkWord(wordF: IWord) {
    let userWord = this.userWordsFromService.find((word: userWord) => word.wordId === this.currentWord.id);
    this.countAnswers();
    this.count++
    const changeWords = () => {
      this.createBlock(this.wordsFromService)
    }
    setTimeout(changeWords, 1000);
    this.wordsforToggle.map(word => {
      word.isHidden = false;
    });

    if (wordF.id === this.currentWord.id) {
      if(!userWord) {
          this.api.createUserWord(localStorage.getItem('userId')!, wordF.id, {difficulty: 'false', optional: {}} )
            .subscribe()
          this.updateStudiedWords(true)
      }
      else if (userWord.difficulty === 'true') {
        this.api.updateUserWord(localStorage.getItem('userId')!, wordF.id, {difficulty: 'false', optional: {}}).subscribe();
        this.updateStudiedWords(true);
      }

      this.toggle(wordF.id);
      this.statisticRightAnswers.push(wordF);

      const play = (url: string): void => {
        this.audioRightAnswer.src = url;
        const audio = this.audioRightAnswer;
        setTimeout(function () {
          audio.play();
        }, 150);
      }
      if (this.flagAnswer) {
        play(this.audioRightPath)
      }

    }

    else {
      if(!userWord) {
        this.api.createUserWord(localStorage.getItem('userId')!, wordF.id, {difficulty: 'true', optional: {}} )
          .subscribe()
      }
      else if (userWord.difficulty === 'false') {
        this.api.deleteUserWord(localStorage.getItem('userId')!, wordF.id ).subscribe();
        this.updateStudiedWords(false);
      }

      this.toggle(this.currentWord.id)
      this.statisticWrongAnswers.push(wordF);
      const play = (url: string): void => {
        this.audioWrongAnswer.src = url;
        const audio = this.audioWrongAnswer;
        setTimeout(function () {
          audio.play();
        }, 150);
      }
      if (this.flagAnswer) {
        play(this.audioWrongPath)
      }
    }
  }

  private updateStudiedWords(add: boolean) {
    if (add) {
      localStorage.setItem('studWordsA', `${(+localStorage.getItem('studWordsA')! || 0) + 1}`)
    } else {
      localStorage.setItem('studWordsA', `${+localStorage.getItem('studWordsA')! - 1}`)
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
