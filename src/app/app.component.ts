import { Component,ViewChild } from '@angular/core';
import { Platform,NavController, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { CitizenProfilePage } from '../pages/citizen-profile/citizen-profile';
import { LoginPage} from '../pages/login/login';
import { ProfilePage} from '../pages/profile/profile';
import { SettingsPage} from '../pages/settings/settings';

import { AuthserviceProvider } from '../providers/authservice/authservice';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  welcomePage: any = WelcomePage;
  citizenProfilePage:any = CitizenProfilePage;
  loginPage:any = LoginPage;
  profilePage:any = ProfilePage;
  settingsPage:any = SettingsPage;
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
    });
  }
  onLogoutClick(){
    this.auth.logout();
    this.nav.popToRoot();
    this.menuCtrl.close();
  }

  viewProfilePage(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}
