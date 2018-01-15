import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { SwipeTabsPage } from '../pages/swipe-tabs/swipe-tabs';
// import { SuperTabsModule } from 'ionic2-super-tabs';

import { Network } from '@ionic-native/network';
import { Storage } from '@ionic/storage';
import { LandingPage } from '../pages/landing/landing';
import { ProductsPage } from '../pages/products/products';
import { LandingPage } from '../pages/landing/landing';
import { ProductsPage } from '../pages/products/products';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = 'LandingPage';
  public rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private network: Network, public store: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      network.onDisconnect().subscribe(() => {
        this.store.set('networkStatus', 'false');
      });

      network.onConnect().subscribe(() => {
        this.store.set('networkStatus', 'true');
      });
    });

    this.store.get('Username').then((val) => {
      (val) ? this.rootPage = 'ProductsPage' : this.rootPage = 'LandingPage'
  });
  }
  
  
}

