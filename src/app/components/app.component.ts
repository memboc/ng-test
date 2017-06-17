import { Component } from '@angular/core';
import { MainLayoutService } from "../services/main-layout.service";
import { FirebaseProvider } from "../providers/firebase.provider";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  breadcrumbs = [
    'Main'
  ];

  constructor(
     public mainPage: MainLayoutService,
     private firebaseProvider: FirebaseProvider
  ) {
    this.mainPage = mainPage;
    firebaseProvider.loginAnon();
  }

  // changeMainTitle(e) {
  //   this.title = this.title + '*';
  //   console.log(e);
  // }
}
