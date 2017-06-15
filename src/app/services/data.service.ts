import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
declare var firebase: any;

@Injectable()
export class DataService {

  constructor(
    private http: Http
  ) {}

  fetchData(url) {
    return this.http.get(url).map(
      (res: Response) => res.json()
    );
  }
  public getDataFb(path, callback) {
    firebase.database().ref(path).on('child_added', (snapshot) => {
      callback(snapshot.val())
    })
  }

}
