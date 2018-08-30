import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Stripe } from '@ionic-native/stripe';

/**
 * Generated class for the CreditCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-credit-card',
  templateUrl: 'credit-card.html',
})
export class CreditCardPage {

  number: any;
  expMonth: any;
  expYear: any;
  cvc: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public stripe: Stripe) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditCardPage');
  }
  onPayment(){

    const cardInfo = {
      number : this.number,
      expMonth: this.expMonth,
      expYear: this.expYear,
      cvc: this.cvc
    }
    
    this.stripe.setPublishableKey('pk_test');
    this.stripe.createCardToken(cardInfo).then((token) => {
      var data = 'stripetoken=' + token + '&amount=500';
      if(data){
        let alert = this.alertCtrl.create({
          title: 'Challan Added',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                this.navCtrl.setRoot(HomePage);
              }
            }
          ]
        });
        alert.present();
      }
    })
  }
}
