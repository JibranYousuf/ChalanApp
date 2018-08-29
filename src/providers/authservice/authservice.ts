import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
 
@Injectable()
export class AuthserviceProvider {

  url;
  authToken: any;
  user: any;

  constructor(public http: HttpClient, private storage: Storage){
    this.url = 'https://tcs-server.herokuapp.com/api/';
  }

  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post(this.url+'login', user, {headers: headers})
  } 
  
  getProfile(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get(this.url+'profile', {headers: headers})
    .map(function (res) { return res}
  )
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
  
  logout(){
    this.authToken = null;
    this.user = null;
    this.storage.clear();
  }

  isLogged(){
    if(this.storage.get('token')){
      return true;
    }
    else{
      return false;
    }
  }

  isAuthenticated(){

    const token =this.loadToken();
    if(token){
      return true;
    }
    else{
      return false;
    }
  }
}