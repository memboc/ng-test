import {Component, OnInit} from '@angular/core';
import {MainLayoutService} from "../../services/main-layout.service";

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
})

export class AboutComponent implements OnInit {

  public title = 'About';
  public checked = true;

  constructor(
    private mainPage: MainLayoutService
  ) {
  }

  ngOnInit() {
    this.mainPage.changeTitle(this.title);
  }
}
