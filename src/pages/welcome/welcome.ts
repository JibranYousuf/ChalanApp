import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {LoginPage} from '../login/login';



@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private menuCtrl: MenuController) {
    this.menuActive();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  menuActive(){
    this.menuCtrl.enable(false);
  }
}
