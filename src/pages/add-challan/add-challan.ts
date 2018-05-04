import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { UserProvider } from '../../providers/user/user';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-add-challan',
  templateUrl: 'add-challan.html',
})
export class AddChallanPage {

  cnic: any;
  challanNo: any;
  challanType: any;
  challanDateCreated: any;
  challanDatePaid: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private userProvider: UserProvider) {
    this.cnic = this.navParams.get('cnic');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddChallanPage');
  }
  onAddNewChallan() {
    const challan = {
      challanNo: this.challanNo,
      challanType: this.challanType,
      challanDateCreated: this.challanDateCreated,
      challanDatePaid: this.challanDatePaid
    }

    this.userProvider.newChallan(this.cnic['cnic'], challan).subscribe(data => {
      if (data) {
        this.navCtrl.push(PaymentPage);
      } else {
        this.navCtrl.push(ProfilePage);
      }
    });
  }
}
