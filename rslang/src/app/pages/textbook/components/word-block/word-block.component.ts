import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-block',
  templateUrl: './word-block.component.html',
  styleUrls: ['./word-block.component.scss']
})
export class WordBlockComponent implements OnInit {

  audioLogo: string = "./assets/volume_Icon.svg";
  audio: HTMLAudioElement = new Audio();
  autoplay: boolean = true;

  displayColor: object = {'background-color': 'rgb(245, 215, 215, 0)'}; 
  displayText: string = ''

  img: object =  {'background-image': 'url(https://app-learnwords-rslang.herokuapp.com/files/03_0045.jpg)'};
  word: string = 'capital - [kæpətl] - столица';
  meaningEn: string = "To <i>describe</i> is to say or write what someone or something is like.";
  meaningRu: string = "Описать - это сказать или написать, на что похож кто-то или что-то";
  exampleEn: string = "They <b>described</b> their tree as colorful, with gold ribbon and a star.";
  exampleRu: string = "Они описали свое дерево как красочное, с золотой лентой и звездой";
  wordSound: string = 'https://app-learnwords-rslang.herokuapp.com/files/03_0045.mp3';
  meaningSound: string = 'https://app-learnwords-rslang.herokuapp.com/files/03_0045_meaning.mp3';
  exampleSound: string = 'https://app-learnwords-rslang.herokuapp.com/files/03_0045_example.mp3';
  

  sound() {
    let count = 0;
    const play = (url: string): void => {
      this.audio.src = url;
      const audio = this.audio; 
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
        }
      });
    }
    if (!this.autoplay && this.audio.currentTime > 0 && !this.audio.paused && !this.audio.ended ) {
      this.audio.pause();
      this.audio.currentTime = 0; 
      this.autoplay = true;
    }
  }

  putToDif() {
    this.displayText = 'СЛОЖНОЕ';
    this.displayColor = {'background-color': 'rgb(245, 215, 215)'};
  }

  putToStud() {
    this.displayText = 'ИЗУЧЕНОЕ';
    this.displayColor = {'background-color': 'rgb(245, 215, 215)'};
  }

  ngOnInit(): void {
  }

}
