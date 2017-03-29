import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/page1/page1';
import { WalletPage } from '../pages/wallet/wallet';
import { HistoryPage } from '../pages/history/history';
import { LogoutPage } from '../pages/logout/logout';
import { MetersPage } from '../pages/meters/meters';
import { RatePage } from '../pages/rate/rate';
import { SettingPage } from '../pages/setting/setting';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SlidesPage } from '../pages/slides/slides';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WalletPage,
    HistoryPage,
    LogoutPage,
    MetersPage,
    RatePage,
    SettingPage,
    AboutPage,
    LoginPage,
    RegisterPage,
    SlidesPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WalletPage,
    HistoryPage,
    LogoutPage,
    MetersPage,
    RatePage,
    SettingPage,
    AboutPage,
    LoginPage,
    RegisterPage,
    SlidesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
