import { Component,ViewChild } from '@angular/core';
import { Platform,NavController, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { ProfilePage} from '../pages/profile/profile';
import { SettingsPage} from '../pages/settings/settings';

import { AuthserviceProvider } from '../providers/authservice/authservice';
import { HomePage } from '../pages/home/home';
import { CreditCardPage } from '../pages/credit-card/credit-card';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  profilePage:any = ProfilePage;
  settingsPage:any = SettingsPage;
  rootPage:any = WelcomePage; 
  homepage: any = HomePage
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, 
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private auth: AuthserviceProvider,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      if(this.auth.isLogged() === true){
        this.rootPage = CreditCardPage;
      }
      else {
        this.rootPage = WelcomePage;
      }
      this.nav.setRoot(this.rootPage);
    });
  }

  ionViewWillEnter() {
    
  }  

  onLogoutClick(){
    this.auth.logout();
    this.menuCtrl.close();
    this.nav.push(WelcomePage);
  }

  viewProfilePage(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  viewSettingsPage(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }


}
