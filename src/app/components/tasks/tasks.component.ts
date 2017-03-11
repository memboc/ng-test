import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {MainLayoutService} from "../../services/main-layout.service";

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TasksComponent implements OnInit {

  public title = 'Tasks';

  public taskName;
  public taskMessage;
  public queryFilter;

  private tasks : Array<any>;


  constructor(
    private mainPage: MainLayoutService
  ) {
    this.tasks = [
      { name: 'sample first task', info: 'This is a first task'},
      { name: 'sample second task', info: 'Some second task'},
    ]
  }

  ngOnInit() {
    this.mainPage.changeTitle(this.title);
  }

  public addTask($e) {
    console.log('add',$e, this.tasks);

    this.tasks.push({
      name: this.taskName,
      info: this.taskMessage,
    });

    this.taskName = '';
    this.taskMessage = '';
  }

  public deleteTask(taskName) {
    console.log(taskName);
    console.log('del', taskName, this.tasks);

    let el = this.tasks.filter(el => el.name == taskName)[0];
    let index = this.tasks.indexOf(el);
    this.tasks.splice(index, 1);
  }

}
