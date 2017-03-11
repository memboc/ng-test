import { Component, OnInit, Input, Output } from '@angular/core';
import {MainLayoutService} from "../../services/main-layout.service";

@Component({
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title : string = 'Homepage';
  // @Input() breadcrumbs;

  constructor(
    private mainPage: MainLayoutService
  ) {}

  ngOnInit() {
    this.mainPage.changeTitle(this.title);
    // this.breadcrumbs.push('Homepage')
  }

  change(title) {
    this.mainPage.changeTitle(title);
  }
}
