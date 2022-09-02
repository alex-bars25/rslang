import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-textbook-nav',
  templateUrl: './textbook-nav.component.html',
  styleUrls: ['./textbook-nav.component.scss']
})
export class TextbookNavComponent implements OnInit {

  constructor(private router: Router) { }

  isActive: boolean[] = [true, false, false, false, false, false];

  @Output() sectionInfo = new EventEmitter<[string, number]>();

  getColor(color: string, group: number): void {
    this.sectionInfo.emit([color, group]);
    this.isActive = [false, false, false, false, false, false];
    this.isActive[group] = true;
  } 

  public goToSprintPage() {
    this.router.navigateByUrl("/sprint");
  }

  public goToAudioGamePage() {
    this.router.navigateByUrl("/audio_game");
  }

  public goToDictionaryPage() {
    this.router.navigateByUrl("/dictionary");
  }

  ngOnInit(): void {
  }

}
