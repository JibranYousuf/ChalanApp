import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  newChallan(cnic, challan) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(this.url + 'challan/insert/' + cnic, challan, { responseType: "text" })
      .map(function (res) { return res }
      )
  }
}

