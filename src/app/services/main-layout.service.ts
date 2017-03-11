import { Injectable } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Injectable()
export class MainLayoutService {

  private baseTitle = 'My app';
  public title;

  constructor(
    private titleService: Title
  ) {
    this.title = this.baseTitle;
  }

  changeTitle(newTitle) {
    if (newTitle) {
      this.title = newTitle + ' - ' + this.baseTitle;
      this.titleService.setTitle(this.title);
    }
    return this.title;
  }
}
