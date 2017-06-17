import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {MainLayoutService} from "../../services/main-layout.service";
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DataService]
})

export class TasksComponent implements OnInit {

  public title = 'Tasks';
  public dataPath = '/tasks';

  public taskName;
  public taskMessage;
  public queryFilter;

  public tasks: Observable<any[]>;


  constructor(
    private mainPage: MainLayoutService,
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.mainPage.changeTitle(this.title);
    this.tasks = this.dataService.getDataList(this.dataPath)
  }

  public addTask($e) {
    console.log('task: add',$e, this.tasks);

    this.dataService.postData(this.dataPath, {
      name: this.taskName,
      info: this.taskMessage,
    });

    this.taskName = '';
    this.taskMessage = '';
  }

  public deleteTask(task) {
    console.log('task: del', task, this.tasks);
    this.dataService.delete(this.dataPath, task);
  }
}
