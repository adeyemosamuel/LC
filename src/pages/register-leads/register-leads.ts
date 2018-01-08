import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ControllerServiceProvider } from '../../providers/controller-service/controller-service';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { Http } from '@angular/http';
import {ServerServiceProvider} from '../../providers/server-service/server-service';

// declare var navigator: any;
// declare var Connection: any;




@IonicPage()
@Component({
  selector: 'page-register-leads',
  templateUrl: 'register-leads.html',
})
export class RegisterLeadsPage {
  Http: any;
  selectedProduct: string = ''
  storage: any;
  leadsArray: any = [];
  occupation: any;
  dob: any;
  gender: any;
  marital_status: any;

  emailaddress: any;
  address: any;
  name: string = '';
  phonenumber: string = '';
  leadArray: Array<any> = [];
  status: any = 'Pending';
  connection: any;



l

  constructor(public navCtrl: NavController,private server:ServerServiceProvider, public http: Http, public navParams: NavParams, private network: Network, public modalCtrl: ModalController, private controller: ControllerServiceProvider, private store: Storage) {

  }

  popover(ev) {
    let pop = this.controller.miscPopOver('PopoverPage', ev);
    pop.present({ ev: ev });
    pop.onDidDismiss((data) => {
      if (data)
        this.navCtrl.setRoot(data);
    });
  }

  selectProductModal() {
    let modal = this.modalCtrl.create('ModalPage');
    modal.present();
    modal.onDidDismiss(data => {
      console.log(data);
      this.selectedProduct = data;
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterLeadsPage');
  }

  savedetails() {


    //API
    this.store.get('networkStatus').then((val) => {
      if (val) {
        let body = {
          name: this.name,
          phonenumber: this.phonenumber,
          selectedProduct: this.selectedProduct,
          occupation: this.occupation,
          dob: this.dob,
          address: this.address,
          marital_status: this.marital_status,
          gender: this.gender,
          emailaddress: this.emailaddress,
          user: 'username'
        };

        //funcName is 'registerLeads'
        this.server.processData(body, 'registerLeads').then((data) => {
          console.log(data);
        }) .catch((err) => {
          console.log(err)
        })

      } else {
        this.store.get('leads').then((val) => {

          if (val) this.leadArray = val;
          this.storedetails();
        });
      }
    });
  }




  storedetails() {
    let body = {
      name: this.name,
      phonenumber: this.phonenumber,
      selectedProduct: this.selectedProduct,
      occupation: this.occupation,
      dob: this.dob,
      address: this.address,
      marital_status: this.marital_status,
      gender: this.gender,
      emailaddress: this.emailaddress,
      status: this.status,
    };
    this.leadArray.push(body);
    this.store.set('leads', this.leadArray, );
  }
}