import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
    let alert = this.alertCtrl.create({
      title: 'Challan Added',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.popToRoot();
          }
        }
      ]
    
    });
    alert.present();
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
