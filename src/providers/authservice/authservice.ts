import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';
 
export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
 
@Injectable()
export class AuthserviceProvider {

  url;
  authToken: any;
  user: any;

  constructor(public http: HttpClient, private storage: Storage){
    this.url = 'http://localhost:3000/api/';
  }
  currentUser: User;

  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(this.url+'login', user, {headers: headers})
    .map(res => res);
  }
  storeUserData(token, user){
    this.storage.set('token', token);
    this.storage.set('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
 
    const token = this.storage.get('token');
    this.authToken = token; 
  }
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert Required Fields");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "1234" && credentials.email === "hamza_dsl@hotmail.com");
        this.currentUser = new User('Hamza', 'Hamza_dsl@hotmail.com.com');
        observer.next(access);
        observer.complete();
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  logout(){
    this.authToken = null;
    this.user = null;
    this.storage.clear();
  }

}