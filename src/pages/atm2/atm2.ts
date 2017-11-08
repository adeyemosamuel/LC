import { Component,NgZone   } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { AtmdataProvider } from '../../providers/atmdata/atmdata';


// declare var google: any;


@IonicPage()
@Component({
    selector: 'page-atm2',
    templateUrl: 'atm2.html',
})

export class Atm2Page {

    data:any;
    branches:any;
   lati;
   longi ;
   place;
   locator ="atm";
    //   options: GeolocationOptions;
    //   currentPos: Geoposition;
    //   @ViewChild('map') mapElement: ElementRef;
    //   map: any;
    //   mapOptions: any;
    //   locator: string = 'atm';

    constructor(public zone:NgZone,  public navCtrl: NavController, public Data:AtmdataProvider, public navParams: NavParams, public geolocation: Geolocation, public nativeGeocoder: NativeGeocoder, public toaster: ToastController, public locac: LocationAccuracy) {
    this.Data.getdata().then(data => {
                 this.data = data; 
                 console.log(this.data)  ;
    })
    this.Data.getbranches().then(branches => {
        this.branches = branches; 
        console.log(this.branches)  ;
})



this.getLocation();
    }

    getLocation(){
        this.geolocation.getCurrentPosition().then((resp) => {
          // resp.coords.latitude
          this.zone.run(() => {
          console.log(resp);
          console.log(resp.coords.latitude);
          console.log(resp.coords.longitude);
          this.lati =resp.coords.latitude;
          this.longi = resp.coords.longitude;
          })
          this.getLocationname(resp.coords.latitude,resp.coords.longitude);
          // resp.coords.longitude
         }).catch((error) => {
           console.log('Error getting location', error);
         });
        }
      
        getLocationname(lati, longi){
          this.nativeGeocoder.reverseGeocode(lati,longi)
          .then((result: any) => {
          console.log('The address is ' + result.street + ' in ' + result.countryCode)
         var locationongps :string = result.thoroughfare+', ' + result.locality + ','+ result.administrativeArea +'' +result.countryName;
       
         this.place = result;
          }).catch((error: any) => { this.place = error.message;});
        }
        openPost(data){
            this.navCtrl.push('AtmPage',{data:data})
            }
      
}


  


//     getlocation() {

//         let options = {
//             enableHighAccuracy: true
//         };
//         this.locac.canRequest().then((res: boolean) => {
//             if (res) {

//                 this.locac.request(this.locac.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
//                     this.geolocation.getCurrentPosition(options).then((position: Geoposition) => {
//                         this.getcountry(position);

//                     }).catch((err) => {
//                         alert(err);
//                     })
                    
//                 }, (error) => {
//                     alert(error);
//                 })
//             }
//         })
//     }
//     getcountry(pos) {
//         this.nativeGeocoder.reverseGeocode(pos.coords.latitude, pos.coords.lingitude).then((res: NativeGeocoderReverseResult) => {
//             let country = this.toaster.create({
//                 message: res.countryName,
//                 duration: 4000
//             });

//             country.present();
//         })

//     }
// }

    //   addMarker(){

    //         let marker = new google.maps.Marker({
    //         map: this.map,
    //         animation: google.maps.Animation.DROP,
    //         position: this.map.getCenter()
    //         });

    //         let content = "<p>This is your current position !</p>";          
    //         let infoWindow = new google.maps.InfoWindow({
    //         content: content
    //         });

    //         google.maps.event.addListener(marker, 'click', () => {
    //         infoWindow.open(this.map, marker);
    //         });



//    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
//       this.addMarker();

//   }

//   getUserPosition(){
//     this.options = {
//         enableHighAccuracy : true
//     };

//     this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

//               this.currentPos = pos;      
//               console.log(pos);

//           },(err : PositionError)=>{
//               console.log("error : " + err.message);
//           });

//   }



