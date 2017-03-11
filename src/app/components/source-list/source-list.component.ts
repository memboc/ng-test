import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-source-list',
  templateUrl: 'source-list.component.html',
  styleUrls: ['source-list.component.css']
})
export class SourceListComponent implements OnInit {

  sourceId: string;

  constructor(private route: ActivatedRoute) {
    this.sourceId = route.snapshot.params['id']
  }

  ngOnInit() {
  }

}
