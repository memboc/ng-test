import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

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


}
