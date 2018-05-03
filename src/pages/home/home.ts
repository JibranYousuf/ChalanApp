import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { UserProvider}  from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  citizen : any;
  // email = '';
  constructor(private nav: NavController,
     private auth: AuthserviceProvider, private userProvider : UserProvider) {
    
  //   let info = this.auth.getUserInfo();
    
  //   this.username = info['username'];
  //   this.email = info['email'];

   
  // }
 
  // public logout() {
  //   this.auth.logout().subscribe(succ => {
  //     this.nav.setRoot('WelcomePage')
  //   });
  // }
  // cnics: string[];
  // handleLogin(){
  //   this.nav.push(ProfilePage);
    
  }

  onSearchInput(cnic){
    this.userProvider.getUser(cnic).subscribe((profile: any) => {
      console.log(profile);
      this.citizen = profile.citizen;
      this.nav.push(ProfilePage, {profile: profile});
    },
    err => {
      console.log(err);
      return false;
    });
  }
  
  onLogoutClick(){
    this.auth.logout();
    this.nav.push(LoginPage)
    return false;
  }
}
