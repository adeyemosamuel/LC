import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtmdataProvider } from '../../providers/atmdata/atmdata';
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-google',
  templateUrl: 'google.html',
})
export class AtmPage {

  @ViewChild('map') mapRef: ElementRef;

  data;
  address;
  long;
  lat;

  constructor(public navCtrl: NavController, public Data: AtmdataProvider, public navParams: NavParams) {
    this.data = this.navParams.get('data');
    console.log(this.data.region);
    console.log(this.data.atmAdress);
    this.address = this.data.atmAdress + ", " + this.data.region;
    this.long = this.data.longitude;
    this.lat = this.data.latitude;
    console.log(this.lat);
    console.log(this.long);

    //   this.lat=location.lat
    // this.Data.getLongLat(this.address).subscribe(location=> {
    //   this.long=location.lng;
    //   this.lat=location.lat;
    //   console.log(this.lat);
    //   console.log(this.long);
    // this.showMap(this.lat,this.long);
    // })
  }

  ionViewDidLoad() {}

  ionViewDidEnter() {
    this.loadMap();
  }

  // showMap(lat, long) {
  //   //Location - lat long
  //   const location = new google.maps.LatLng(lat, long);

  //   //Map options
  //   const options = {
  //     center: location,
  //     zoom: 15,
  //     mapTypeId: 'terrain'
  //   };
  //   const map = new google.maps.Map(this.mapRef.nativeElement,
  //     options);

  //   setTimeout(() => map.setMapTypeId('terrain'), 3000);
  //   this.addMarker(location, map);
  // }

  // addMarker(position, map) {
  //   return new google.maps.Marker({
  //     position,
  //     map
  //   });
  // }

  loadMap() {
    let latLong = {
      lat: Number(this.lat),
      lng: Number(this.long)
    };

    let map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 15,
      center: latLong
    });

    let marker = new google.maps.Marker({
      position: latLong,
      map: map,
      label: 'HB',
      title: 'Heritage Bank'
    });
  }



}
