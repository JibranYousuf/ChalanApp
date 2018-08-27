import { Component} from '@angular/core';
import { NavController, ToastController, MenuController, LoadingController,AlertController} from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { ProfilePage } from '../profile/profile';
import { UserProvider}  from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  citizen : any;

  constructor(
     private nav: NavController,
     private menuCtrl: MenuController,
     private userProvider : UserProvider, 
     private toastCtrl: ToastController,
     private loadingCtrl: LoadingController,
     private alertCtrl: AlertController
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
  
}
