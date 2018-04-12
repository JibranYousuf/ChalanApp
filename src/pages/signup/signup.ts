import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {AuthserviceProvider} from '../../providers/authservice/authservice';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  createSuccess = false;
  registerCredentials= {email: '' , password: ''};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthserviceProvider,
              private alertCtrl: AlertController) {
  }
public register(){
  this.auth.register(this.registerCredentials).subscribe(success =>{
    if(success){
      this.createSuccess = true;
      this.showPopup("Success", "Account Created");

    }else{
      this.showPopup("Error", "Account Couldn't be created")
    }
  },
    error =>{
      this.showPopup("Error",error)
    });
}

showPopup(title ,text){
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: text,
    buttons: [
      {
        text:"OK",
        handler: data =>{
          if(this.createSuccess){
            this.navCtrl.popToRoot();
          }
        }
      }
    ]
  });
  alert.present();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
