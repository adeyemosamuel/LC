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
  constructor(public navCtrl: NavController,  public Data:AtmdataProvider,public navParams: NavParams) {
    this.data=this.navParams.get('data');
    console.log(this.data.Region);
    console.log(this.data.ATM_Address);
    this.address = this.data.ATM_Address+", "+this.data.Region;
    this.Data.getLongLat(this.address).subscribe(location=> {
      this.long=location.lng;
      this.lat=location.lat;
      console.log(this.lat);
      console.log(this.long);
      this.showMap();
    })


  }

  ionViewDidLoad() {
   
  }

  showMap(){
    //Location - lat long
    const location = new google.maps.LatLng(this.lat, this.long);

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


  
}
