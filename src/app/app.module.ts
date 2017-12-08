import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { AtmdataProvider } from '../providers/atmdata/atmdata';
import { HttpModule } from '@angular/http';
import { ControllerServiceProvider } from '../providers/controller-service/controller-service';
import { ProductdataProvider } from '../providers/productdata/productdata';






@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  
    
    
  
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    LocationAccuracy,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AtmdataProvider,
    ControllerServiceProvider,
    ProductdataProvider
  ]
})
export class AppModule {}
