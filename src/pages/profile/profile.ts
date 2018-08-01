import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddChallanPage } from '../add-challan/add-challan';
import { ChallansPage} from '../challans/challans';
 
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profile = this.navParams.get('profile');
    console.log(this.profile)
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  addNewChallan() {
    this.navCtrl.push(AddChallanPage, { cnic: this.profile });
  }
  openChallansPage(){
    this.navCtrl.push(ChallansPage, { challans: this.profile['challans'] });

  }

}
