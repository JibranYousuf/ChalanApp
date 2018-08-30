import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage'
import { DatePipe } from '@angular/common';

import { WelcomePage } from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPageModule } from '../pages/login/login.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module'
import { ProfilePageModule } from '../pages/profile/profile.module'; 
import { ChallansPageModule } from '../pages/challans/challans.module'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Stripe } from '@ionic-native/stripe';

import { AuthserviceProvider } from '../providers/authservice/authservice';
import { ProfilePage } from '../pages/profile/profile';
import { AddChallanPageModule } from "../pages/add-challan/add-challan.module";
import { PaymentPageModule } from "../pages/payment/payment.module";
import { UserProvider } from '../providers/user/user';
import { ChallansPage } from '../pages/challans/challans';
import { CreditCardPageModule} from '../pages/credit-card/credit-card.module';
import { CreditCardPage } from '../pages/credit-card/credit-card';
import { SettingsPageModule} from '../pages/settings/settings.module';
import { SettingsPage } from '../pages/settings/settings';
import { StripeCcProvider } from '../providers/stripe-cc/stripe-cc';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    WelcomePageModule,
    ProfilePageModule,
    AddChallanPageModule,
    PaymentPageModule,
    HttpClientModule,
    ChallansPageModule,
    CreditCardPageModule,
    SettingsPageModule
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
    ChallansPage,
    CreditCardPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthserviceProvider,
    UserProvider,
    DatePipe,
    Stripe,
    StripeCcProvider
  ]
})
export class AppModule {}
