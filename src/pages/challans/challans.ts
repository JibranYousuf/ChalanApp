import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from '../../providers/user/user';
/**
 * Generated class for the ChallansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-challans',
  templateUrl: 'challans.html',
})
export class ChallansPage {
  challans: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.challans = this.navParams.get('challans');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChallansPage');
  }
  

}
