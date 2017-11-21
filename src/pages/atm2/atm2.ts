import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { AtmdataProvider } from '../../providers/atmdata/atmdata';
import { FormControl } from '@angular/forms';


// declare var google: any;


@IonicPage()
@Component({
    selector: 'page-atm2',
    templateUrl: 'atm2.html',
})

export class Atm2Page {
    // searchTerm: any;
    data: any;
    _data: any;
    _branches: any;
    branches: any;
    lati;
    longi;
    place;
    locator = "atm";
    // searchControl: FormControl;
    // searching: any = false;
    //   options: GeolocationOptions;
    //   currentPos: Geoposition;
    //   @ViewChild('map') mapElement: ElementRef;
    //   map: any;
    //   mapOptions: any;
    //   locator: string = 'atm';

    constructor(public zone: NgZone, public navCtrl: NavController, public Data: AtmdataProvider, public navParams: NavParams, public geolocation: Geolocation, public nativeGeocoder: NativeGeocoder, public toaster: ToastController, public locac: LocationAccuracy) {
        this.getdata();
        this.getbranches();
        this.getLocation();
        // this.searchControl = new FormControl();
    }
    // ionViewDidLoad() {

    //     this.setFilteredItems();

    //     this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
    //         this.searching = false;
    //         this.setFilteredItems();

    //     });


    // }

    getdata() {
        this.Data.getdata().then(data => {
            this.data = data;
            this._data = data;
            console.log(this.data);
        });
    }

    getbranches() {
        this.Data.getbranches().then(branches => {
            this.branches = branches;
            this._branches = branches;
            console.log(this.branches);
        });
    }

    getLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            this.zone.run(() => {
                console.log(resp);
                console.log(resp.coords.latitude);
                console.log(resp.coords.longitude);
                this.lati = resp.coords.latitude;
                this.longi = resp.coords.longitude;
            })
            this.getLocationname(resp.coords.latitude, resp.coords.longitude);
            // resp.coords.longitude
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

    getLocationname(lati, longi) {
        this.nativeGeocoder.reverseGeocode(lati, longi)
            .then((result: any) => {
                console.log('The address is ' + result.street + ' in ' + result.countryCode)
                var locationongps: string = result.thoroughfare + ', ' + result.locality + ',' + result.administrativeArea + '' + result.countryName;

                this.place = result;
            }).catch((error: any) => { this.place = error.message; });
    }
    openPost(data) {
        this.navCtrl.push('AtmPage', { data: data })
    }

    
    // onSearchInput(){
    //     this.searching = true;
    // }

    // setFilteredItems() {

    //     this.data = this.data.filterdata(this.searchTerm);

    // }

    getItems(ev) {
        if (this.locator === 'atm') {
            this.filterATM(ev);
        } else {
            this.filterBranches(ev);
        }
    }

    filterATM(ev){
        this.data = this._data;
        var val = ev.target.value;

        if (val && val.trim() != '') {
            this.data = this.data.filter((item) => {
                return (item.C.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }

    }

    filterBranches(ev){
        this.branches = this._branches;
        var val = ev.target.value;

        if (val && val.trim() != '') {
            this.branches = this.branches.filter((item) => {
                return (item.C.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }

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



