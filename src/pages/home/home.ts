import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {AuthserviceProvider} from '../../providers/authservice/authservice';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  email = '';
  constructor(private nav: NavController,
     private auth: AuthserviceProvider) {
    
    let info = this.auth.getUserInfo();
    
    this.username = info['name'];
    this.email = info['email'];

   
  }
 
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('WelcomePage')
    });
  }
  cnics: string[];
  handleLogin(){
    this.nav.push(ProfilePage);
    
  }

}
