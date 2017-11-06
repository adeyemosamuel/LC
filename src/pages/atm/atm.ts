import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-atm',
  templateUrl: 'atm.html',
})
export class AtmPage {

  @ViewChild('map') mapRef: ElementRef;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap(){
    //Location - lat long
    const location = new google.maps.LatLng(6.5244, 3.3792);

    //Map options
    const options = {
      center: location,
      zoom: 15,
      mapTypeId: 'satellite'
    };
const map = new google.maps.Map(this.mapRef.nativeElement, 
  options);

setTimeout(() => map.setMapTypeId('satellite'), 3000);
  this.addMarker(location, map);
  }

  addMarker(position, map){
return new google.maps.Marker({
position,
map
});
  }


  listAllATM() {
    console.log("was here");
  }

}
