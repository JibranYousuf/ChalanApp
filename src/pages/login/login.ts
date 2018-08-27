import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { error } from 'util';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  // loading: Loading;
  // registerCredentials = {email: '', password:''};

  cnic: String;
  password: String;
  public type = 'password';
  public showPass = false;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthserviceProvider,
    private storage: Storage,
    private toastCtrl: ToastController,
    private menuCtrl: MenuController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {
    this.menuActive();
  }

  showPassword() {
    this.showPass = !this.showPass;

    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }


  onLoginSubmit() {
    const loading = this.loadingCtrl.create({
      content: 'Signing in..',

    });
    loading.present();

    const user = {
      cnic: this.cnic,
      password: this.password,
    }

    this.auth.authenticateUser(user).subscribe((data: any) => {
      loading.dismiss();

      if (data) {
        this.auth.storeUserData(data.token, data.user);
        this.storage.set('user', JSON.stringify(data.user))
        const toast = this.toastCtrl.create({
          message: 'Login Successfully',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
        this.navCtrl.push(HomePage);
      }
    },
      errResponse => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: errResponse.error || "Something went wrong!",
          buttons: ['OK']
        });
        alert.present();
      });
  }
  menuActive() {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}