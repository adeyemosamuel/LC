import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { SwipeTabsPage } from '../pages/swipe-tabs/swipe-tabs';
// import { SuperTabsModule } from 'ionic2-super-tabs';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'Atm2Page';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

