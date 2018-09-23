import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Stripe } from '@ionic-native/stripe';
import { StripeCcProvider } from '../../providers/stripe-cc/stripe-cc'
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
  url: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public stripe: Stripe,
    public stripeCC: StripeCcProvider,
    public http: Http
  ) {
    this.url = 'https://tcs-server.herokuapp.com/api/';
    this.stripe.setPublishableKey('pk_test_DNrwbpjpcmEehadayDsYLeZ2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditCardPage');
  }

//   onPayment(){
//     let alert = this.alertCtrl.create({
//      title: 'Challan Added',
//      buttons: [
//        {
//          text: 'OK',
//          handler: () => {
//            this.navCtrl.setRoot(HomePage);
//          }
//        }
//      ]
//    });
//    alert.present();
//  }

  onPayment() {

    let card = {
      number: this.number,
      expMonth: this.expMonth,
      expYear: this.expYear,
      cvc: this.cvc
    }
    
    this.stripe.createCardToken(card)
      .then((token) => {
        console.log(token)
        console.log(token.id)
        let data = {
        stripeToken : token,
        amount : 50
      }
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.url + 'challans/processpay/', data, {headers: headers})
          .subscribe((res) => {
            if (res) {
              alert(token.id)
            }
          })
      }, error => {
        alert(error)
        console.log(error);
      })
  }
}