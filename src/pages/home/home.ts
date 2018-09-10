import { Component} from '@angular/core';
import { NavController, ToastController, MenuController, LoadingController,AlertController} from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { UserProvider}  from '../../providers/user/user';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  citizen : any;
  longitude: any;
    latitude: any;
    timestamp: number;
    
    today = Date.now();

  constructor(
     private nav: NavController,
     private menuCtrl: MenuController,
     private userProvider : UserProvider, 
     private toastCtrl: ToastController,
     private loadingCtrl: LoadingController,
     private alertCtrl: AlertController,
     private geolocation: Geolocation
       ) {    
      this.menuActive();
    }
  

  onSearchInput(cnic){
    const loading = this.loadingCtrl.create({
      content: 'Searching..',

    });
    loading.present(); 

    this.userProvider.getUser(cnic).subscribe((profile: any) => {
      loading.dismiss();

      if(profile){
      this.citizen = profile.citizen;
      const toast = this.toastCtrl.create({
        message: 'Citizen Searched Succesfully',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.nav.push(ProfilePage, {profile: profile});
    }    
   },
  errResponse =>{
    loading.dismiss();
    const alert = this.alertCtrl.create({
      title: 'Citizen Not Found',
      buttons: ['OK']
    });
    alert.present();
  });
  }
  onOpenMenu(){
    this.menuCtrl.open();
  }
  menuActive(){
    this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    var options = {
      enableHighAccuracy: true,
      maximumAge: 0
    };

    this.geolocation.getCurrentPosition(options).then((resp) => {
      this.latitude = resp.coords.latitude// resp.coords.latitude
      this.longitude = resp.coords.longitude// resp.coords.longitude
      this.timestamp = Math.round(resp.timestamp/1000)// resp.timestamp

      console.log(resp.coords.latitude + ' ' + resp.timestamp + ' ' + resp.coords.longitude);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}