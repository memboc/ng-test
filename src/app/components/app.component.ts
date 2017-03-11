import { Component } from '@angular/core';
import {MainLayoutService} from "../services/main-layout.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  breadcrumbs = [
    'Main'
  ];

  mainPage;

  constructor(
     mainPage: MainLayoutService
  ) {
    this.mainPage = mainPage;
  }


  // changeMainTitle(e) {
  //   this.title = this.title + '*';
  //   console.log(e);
  // }
}
