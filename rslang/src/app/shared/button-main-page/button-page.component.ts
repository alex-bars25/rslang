import {Component, Input, OnInit} from '@angular/core';
import {LinksServiceService} from "../../services/links-service.service";

@Component({
  selector: 'app-button-main-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss']
})
export class ButtonPageComponent implements OnInit {

  @Input()
  public buttonTitle = 'New Button';

  @Input()
  public color: string;

  @Input()
  public disabled = true;

  public imgUrl: any;


  constructor(private linksService: LinksServiceService) { }

  ngOnInit(): void {
     this.imgUrl = this.linksService.imageUrl;
  }

}
