import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import {AuthserviceProvider} from '../../providers/authservice/authservice';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {email: '', password:''};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private auth: AuthserviceProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController ) {
  }
  public login(){
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if(allowed){
        this.navCtrl.setRoot(TabsPage);
      }else{
        this.showError("Access Denied");
      }
    },
     error =>{
       this.showError(error);
     });
  }

  showLoading(){
    this.loading= this.loadingCtrl.create({
      content:'Please Wait..',
      dismissOnPageChange: true
    });
   
  }
  showError(text){
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title:'Failed to Login',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
