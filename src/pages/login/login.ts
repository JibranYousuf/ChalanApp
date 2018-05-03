import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
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

  email: String;
  password: String;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private auth: AuthserviceProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private storage: Storage ) {
  }

  
  onLoginSubmit(){
    const user = {
      email: this.email,
      password: this.password,
    }

    this.auth.authenticateUser(user).subscribe((data :any)=>{
      console.log(data)
      if(data){
        this.auth.storeUserData(data.token, data.user);
          this.storage.set('user',JSON.stringify(data.user))
          this.navCtrl.push(HomePage);
      } else {
        this.navCtrl.push(LoginPage);
      }
    })
  }

  
  // public login(){
  //   this.showLoading()
  //   this.auth.login(this.registerCredentials).subscribe(allowed => {
  //     if(allowed){
  //       this.navCtrl.setRoot(HomePage);
  //     }else{
  //       this.showError("Access Denied");
  //     }
  //   },
  //    error =>{
  //      this.showError(error);
  //    });
  // }

  // showLoading(){
  //   this.loading= this.loadingCtrl.create({
  //     content:'Please Wait..',
  //     dismissOnPageChange:true
  //       });
   
  // }
  // showError(text){
  //   this.loading.dismiss();
  //   let alert = this.alertCtrl.create({
  //     title:'Failed to Login',
  //     subTitle: text,
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
