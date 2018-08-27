import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CreditCardPage } from '../credit-card/credit-card';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  paymentMethod(){
   
    this.navCtrl.push(CreditCardPage)
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
