import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { ControllerServiceProvider } from '../../providers/controller-service/controller-service';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { AtmdataProvider } from '../../providers/atmdata/atmdata';


@IonicPage()
@Component({
    selector: 'page-atm2',
    templateUrl: 'atm2.html',
})

export class Atm2Page {

    data: any;
    _data: any;
    _branches: any;
    branches: any;
    lati;
    longi;
    place;
    locator = "atm";


    constructor(public zone: NgZone, public navCtrl: NavController, public Data: AtmdataProvider, public navParams: NavParams, public geolocation: Geolocation, public nativeGeocoder: NativeGeocoder, public toaster: ToastController, public locac: LocationAccuracy, private controller: ControllerServiceProvider,) {
    }

    async ionViewDidLoad() {
        const response = await this.Data.getService('atm');
        // console.log(response[0]);
        this.data = response[0];
        this._data = response[0];
        console.log(this.data);
    }

    popover(ev) {
        let pop = this.controller.miscPopOver('PopoverPage', ev);
        pop.present({ev: ev});
        pop.onDidDismiss((data) => {
            if (data)
                this.navCtrl.setRoot(data);
        });
      }

    getdata() {
        // this.Data.getdata().then(data => {
        //     this.data = data;
        //     this._data = data;
        //     console.log(this.data);
        // });
    }

    getbranches() {
        this.Data.getbranches().then(branches => {
            this.branches = branches;
            this._branches = branches;
            console.log(this.branches);
        });
    }


    openPost(data) {
        this.navCtrl.push('AtmPage', { data: data })
    }

    getItems(ev) {
        if (this.locator === 'atm') {
            this.filterATM(ev);
        } else {
            this.filterBranches(ev);
        }
    }

    filterATM(ev) {
        this.data = this._data;
        var val = ev.target.value;

        if (val && val.trim() != '') {
            this.data = this.data.filter((item) => {
                return (item.ADDRESSES.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }

    }

    filterBranches(ev) {
        this.branches = this._branches;
        var val = ev.target.value;

        if (val && val.trim() != '') {
            this.branches = this.branches.filter((item) => {
                return (item.ADDRESSES.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }

    }

}



