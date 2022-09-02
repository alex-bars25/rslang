import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dictionary-nav',
  templateUrl: './dictionary-nav.component.html',
  styleUrls: ['./dictionary-nav.component.scss']
})
export class DictionaryNavComponent implements OnInit {

  constructor(private router: Router) { }

  isActive: boolean[] = [true, false];

  @Output() sectionInfo = new EventEmitter<[string, number]>();

  getColor(color: string, group: number): void {
    this.sectionInfo.emit([color, group]);
    this.isActive = [false, false];
    this.isActive[group] = true;
  } 

  goToSprintPage() {
    this.router.navigateByUrl("/sprint");
  }

  goToAudioGamePage() {
    this.router.navigateByUrl("/audio_game");
  }

  goToTextbookPage() {
    this.router.navigateByUrl("/textbook");
  }

  ngOnInit(): void {
  }

}
