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
     private auth: AuthserviceProvider,
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

    const alert = this.alertCtrl.create({
      title: 'Citizen Not Found',
      buttons: ['OK']
    });


    this.userProvider.getUser(cnic).subscribe((profile: any) => {
      
      loading.dismiss();

      this.citizen = profile.citizen;
      const toast = this.toastCtrl.create({
        message: 'profile loaded succesfully',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
      this.nav.push(ProfilePage, {profile: profile});
    },
    err => {
      
      alert.present();
      console.log(err);
      return false;
    });
  }
  onOpenMenu(){
    this.menuCtrl.open();
  }
  menuActive(){
    this.menuCtrl.enable(true);
  }
  
}
