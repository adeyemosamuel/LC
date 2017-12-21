import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DatePicker, DatePickerOptions } from '@ionic-native/date-picker';
import { Device } from '@ionic-native/device';
import { Http } from '@angular/http';
import { StorageService } from './storage-service';
import { AppData } from './app-data';

@Injectable()
export class NativeprocessProvider {
  dateOption: DatePickerOptions;
  actualMonth: string;
  address: string;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocode: NativeGeocoder,
    private camera: Camera,
    private datepicker: DatePicker,
    private plt: Platform,
    private device: Device,
    private store: StorageService,
    private http: Http,
    private appdata: AppData
  ) {
    console.log('Hello Nativeprocess Provider');
    this.getLocation();
  }

  // Returns User's Street, City and Country
  async getLocation(){
    let response = await this.store.fetchDoc('loginuser');
    if (response == 'Failed') {
      this.getLocation();
    }
    else {
      // try {
      //   let resp = await this.geolocation.getCurrentPosition();
      //   let val: NativeGeocoderReverseResult = await this.nativeGeocode.reverseGeocode(resp.coords.latitude, resp.coords.longitude);
      //   response.location = val.street + ', ' + val.city + ', ' + val.countryName;
      // }
      // catch(err) {
      //   console.log(err);
      //   response.location = 'N/A';
      // }
      // await this.store.createUpdateDoc(response);
      response.location = 'Nigeria';
      await this.store.createUpdateDoc(response);
    }
  }

  // Using Google reverse geolocation service
  googleMap(latlong) {
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+latlong+'&key=AIzaSyDxT7GcMuDeoouwMU8xc-AeDejQXYeGnnU')
    .map(res => {
      return res.json().results.filter((item) => {
        return item;
      });
    })
    .subscribe(data => {
      console.log(data[0].formatted_address);
      // this.store.saveLocation(data[0].formatted_address);
    })
  }

  // For taking pictures using the device's camera
  async takePicture() {
    const options: CameraOptions = {
      quality: 20,
      targetHeight: 400,
      targetWidth: 400,
      destinationType: this.camera.DestinationType.DATA_URL
    }

    try {
      let resp = await this.camera.getPicture(options);
      return 'data:image/jpeg;base64,' + resp;
    }
    catch(err) {
      console.log(err);
      return 'Failed';
    }
  }

  // For date selection
  async pickDate(val) {
    if (this.plt.is('android')){
      this.dateOption = {
        date: new Date(val),
        mode: 'date',
        maxDate: new Date(),
        androidTheme: 3
      }
    }else{
      this.dateOption = {
        date: new Date(val),
        maxDate: new Date(),
        mode: 'date'
      }
    }

    try {
      let dateResponse = await this.datepicker.show(this.dateOption);
      var actualDate;

      if (Number((dateResponse.getMonth() + 1)) < 10){
        this.actualMonth = '0' + Number((dateResponse.getMonth() + 1)).toString();
      }else{
        this.actualMonth = Number((dateResponse.getMonth() + 1)).toString();
      }
      
      if (dateResponse.getDate() < 10){
        actualDate = '0' + dateResponse.getDate().toString();
      }else{
        actualDate = dateResponse.getDate().toString();
      }
      return actualDate;
    }
    catch(err) {
      console.log(err);
      return '1970-01-01';
    }
  }

  // Device OS
  deviceOS(): string{
    return this.device.platform;
  }

  // Device Model
  deviceModel(): string{
    return this.device.model;
  }

  // Device UUID - Universally Unique Identifier
  deviceUUID(): string {
    let uuid: string = this.device.uuid;

    if (uuid == '' || uuid == null) {
      return 'ID' + (Math.floor(Math.random() * (1000000 - 100000)) + 100000);
    }

    return uuid;
  }

}