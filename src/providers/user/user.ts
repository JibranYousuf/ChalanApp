import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  url: any;
  cnic: any;
  
  constructor(public httpClient: HttpClient) {
    this.url = 'http://localhost:3000/api/';
  }
  getUser(cnic) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.get(this.url + 'citizen/' + cnic, { headers: headers })
      .map(function (res) { return res }
      )
  }
  newChallan(cnic, challan){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(this.url + 'challan/insert/' +cnic , challan, { responseType: "text" })
      .map(function (res) { return res }
      )
  }
}

