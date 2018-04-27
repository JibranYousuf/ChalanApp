import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {WelcomePage} from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPage } from '../pages/signup/signup';
import {WelcomePageModule} from '../pages/welcome/welcome.module'
import {ProfilePageModule} from '../pages/profile/profile.module'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthserviceProvider } from '../providers/authservice/authservice';
import { ProfilePage } from '../pages/profile/profile';
import {AddChallanPageModule} from "../pages/add-challan/add-challan.module";
import {PaymentPageModule} from "../pages/payment/payment.module";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    WelcomePageModule,
    ProfilePageModule,
    AddChallanPageModule,
    PaymentPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    AboutPage,
    ContactPage,
    LoginPage,
    HomePage,
    WelcomePage,
    TabsPage,
    ProfilePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthserviceProvider,
    
  ]
})
export class AppModule {}
