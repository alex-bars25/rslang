import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-sprint-play',
  templateUrl: './sprint-play.component.html',
  styleUrls: ['./sprint-play.component.scss']
})
export class SprintPlayComponent implements OnInit {
  @Output()
  isStarted: EventEmitter<boolean>;

  public seconds: number;
  public score: number;
  public points: number;
  public wrong: boolean;
  public correct: boolean;

  constructor(private router: Router) {
    this.isStarted = new EventEmitter<boolean>();
    this.seconds = 60;
    this.score = 0;
    this.points = 10;
    this.wrong = false;
    this.correct = false;
  }

  ngOnInit(): void {
    this.countdown();
  }

  private countdown(): void {
    interval(1000)
      .pipe(take(60))
      .subscribe(() => this.seconds -= 1);
  }

  public endGame(): void {
    this.router.navigate(['/home'])
  }

}
