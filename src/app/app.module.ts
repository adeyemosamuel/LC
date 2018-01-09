import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Device } from '@ionic-native/device';
import { Camera } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
import { Network } from '@ionic-native/network';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
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
import { ControllerServiceProvider2 } from '../providers/controller-service2/controller-service2';
import { NativeprocessProvider } from '../providers/nativeprocess/nativeprocess';
import { StorageServiceProvider } from '../providers/storage-service/storage-service';
import { ValidateServiceProvider } from '../providers/validate-service/validate-service';
import { ServerServiceProvider } from '../providers/server-service/server-service';
import { SignaturePadModule } from 'angular2-signaturepad';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';




import { LGAFilter } from '../pipes/lgafilter/lgafilter';
import { Rmfilter } from '../pipes/rm/rm';
import { OrderByPipe } from '../pipes/oderby/oderby';
import { LandingProvider } from '../providers/landing/landing';






@NgModule({
  declarations: [
    MyApp,
    LGAFilter,
    Rmfilter,
    OrderByPipe

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    SignaturePadModule,
    IonicStorageModule.forRoot()
  
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
    LocalNotifications,
    LocationAccuracy,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AtmdataProvider,
    ControllerServiceProvider,
    ProductdataProvider,
    LeadsServiceProvider,
    AppDataProvider,
    ControllerServiceProvider2,
    NativeprocessProvider,
    StorageServiceProvider,
    ValidateServiceProvider,
    ServerServiceProvider,
    Device,
    Camera,
    DatePicker,
    Network,
    SQLite,
    LandingProvider,

  ]
})
export class AppModule {}
