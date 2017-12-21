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
import { LeadsServiceProvider } from '../providers/leads-service/leads-service';
import { AppDataProvider } from '../providers/app-data/app-data';
import { ControllerService2Provider } from '../providers/controller-service2/controller-service2';
import { NativeprocessProvider } from '../providers/nativeprocess/nativeprocess';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';
import { ValidateServiceProvider } from '../providers/validate-service/validate-service';
import { ServerServiceProvider } from '../providers/server-service/server-service';






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
    ProductdataProvider,
    LeadsServiceProvider,
    AppDataProvider,
    ControllerService2Provider,
    NativeprocessProvider,
    StorageServiceProvider,
    ValidateServiceProvider,
    ServerServiceProvider
  ]
})
export class AppModule {}
