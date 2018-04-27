import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the AddChallanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-challan',
  templateUrl: 'add-challan.html',
})
export class AddChallanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddChallanPage');
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you sure to Add this Challan?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
          this.navCtrl.push(PaymentPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
