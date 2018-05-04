import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthserviceProvider} from '../../providers/authservice/authservice';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // loading: Loading;
  // registerCredentials = {email: '', password:''};

  cnic: String;
  password: String;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private auth: AuthserviceProvider,
    private storage: Storage ) {
  }

  
  onLoginSubmit(){
    const user = {
      cnic: this.cnic,
      password: this.password,
    }

    this.auth.authenticateUser(user).subscribe((data :any)=>{
      if(data){
        this.auth.storeUserData(data.token, data.user);
          this.storage.set('user',JSON.stringify(data.user))
          this.navCtrl.push(HomePage);
      } else {
        this.navCtrl.push(LoginPage);
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
