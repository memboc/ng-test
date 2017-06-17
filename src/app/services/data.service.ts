import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { FirebaseProvider } from "../providers/firebase.provider";
import * as firebase from "firebase/app";
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class DataService {

  constructor(
    private http: Http,
    private provider: FirebaseProvider
  ) {
    // this.provider.loginAnon();
  }

  public fetchJsonData(url) {
    return this.http.get(url).map(
      (res: Response) => res.json()
    );
  }

  /**
   * @param path
   * @param callback
   */
  public getDataSubsctibe(path, callback) {
    this.provider.getDataSubsctibe(path, callback);
  }

  /**
   * @param path
   * @returns {Observable<any[]>}
   */
  public getDataList(path) {
    return this.provider.getDataList(path);
  }

  /**
   * @param path
   * @param dataObj
   */
  public postData(path, dataObj) {
    this.provider.postData(path, dataObj);
  }

  /**
   * @param path
   * @param item
   */
  public delete(path, item) {
    this.provider.delete(path, item);
  }
}
