import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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
    private storage: Storage,
    private toastCtrl: ToastController ) {
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
          const toast = this.toastCtrl.create({
            message: 'Login successfully',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          this.navCtrl.push(HomePage);
      } else {
        console.log('not loggin')
        this.navCtrl.push(LoginPage);
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
