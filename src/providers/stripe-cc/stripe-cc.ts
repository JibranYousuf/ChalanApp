import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the StripeCcProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StripeCcProvider {


  url: any;

  constructor(public httpClient: HttpClient) {
    this.url = 'https://tcs-server.herokuapp.com';
  }

    payment(data): Observable<any> {
      console.log(data);
      return this.httpClient.post(this.url + 'challans/processpay/', data);
    }
}
