import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {MainLayoutService} from "../../services/main-layout.service";
import {DataService} from "../../services/data.service";
declare var firebase: any;

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.component.html',
  styleUrls: ['tasks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DataService]
})

export class TasksComponent implements OnInit {

  public title = 'Tasks';
  public url = 'https://test-ang-13e81.firebaseio.com/.json';

  public taskName;
  public taskMessage;
  public queryFilter;

  private tasks : Array<any>;


  constructor(
    private mainPage: MainLayoutService,
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {
    this.tasks = [];
  }

  ngOnInit() {
    this.mainPage.changeTitle(this.title);
    /*
    this.dataService.fetchData(this.url)
      .subscribe((tasks) => {
        this.tasks = tasks;
        this.cdr.markForCheck(); // Включение обновления состояний
      });
  */
    this.dataService.getDataFb('/', (taskObj) => {
      this.tasks.push(taskObj);
      this.cdr.markForCheck(); // Включение обновления состояний
    });
  }

  public addTask($e) {
    console.log('add',$e, this.tasks);

    this.dataService.postDataFb('/', {
      name: this.taskName,
      info: this.taskMessage,
    });
/*
    this.tasks.push({
      name: this.taskName,
      info: this.taskMessage,
    });
*/

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

  public getDataFb() {
    firebase.database().ref('/').on('child_added', (snapshot) => {
      console.log(snapshot.val());
    })
  }
}
