import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StripeCcProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StripeCcProvider {

  url: any;

  constructor(public httpClient: HttpClient) {
    this.url = 'https://tcs-server.herokuapp.com/api/';
  }

  payViaStripe(data){
    var data;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/xxx-www-form-urlencoded');
    return this.httpClient.get(this.url + 'processpay/' + data, { headers: headers })
    }
}
