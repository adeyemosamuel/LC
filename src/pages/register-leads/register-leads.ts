import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ControllerServiceProvider } from '../../providers/controller-service/controller-service';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { Http } from '@angular/http';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
// declare var navigator: any;
// declare var Connection: any;



@IonicPage()
@Component({
  selector: 'page-register-leads',
  templateUrl: 'register-leads.html',
})
export class RegisterLeadsPage {
  Username: any;
  Http: any;
  products: string = ''
  storage: any;
  leadsArray: any = [];
  occupation: any;
  dateOfBirth: any;
  gender: any;
  maritalStatus: any; 
  comments: any;
  emailAddress: any;
  address: any;
  nameOfUser: string = '';
  phoneNum: string = '';
  leadArray: Array<any> = [];
  status: any = 'Pending';
  connection: any;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private server: ServerServiceProvider,
    public http: Http, public navParams: NavParams,
    private network: Network, public modalCtrl: ModalController,
    private controller: ControllerServiceProvider,
    private verify: VerifyServiceProvider,
    private store: Storage,
    private alertCtrl: AlertController
  ) {}

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
      this.products = data;
    });
  }

  ionViewDidLoad() {
    this.getUsernameFromStorage();
  }

  async getUsernameFromStorage(){
    this.store.get('Username').then((val) => {
      this.Username = val;
    });
  }

  savedetails() {

    if (!this.verify.verifyRegisterLeads(this.nameOfUser, this.occupation, this.dateOfBirth, this.gender, this.maritalStatus, this.phoneNum, this.emailAddress, this.address)) {
      alert(this.verify.errorMessage);
      this.alertCtrl.create({
        subTitle: 'Message',
        message: this.verify.errorMessage
      }).present();
      return false;
    }
    //API
    // this.store.get('networkStatus').then((val) => {
    //   console.log(val);
    //   if (!val) {
        let body = {
          nameOfUser: this.nameOfUser,
          phoneNum: this.phoneNum,
          products: this.products.split(',')[1],
          occupation: this.occupation,
          dateOfBirth: this.dateOfBirth,
          address: this.address,
          maritalStatus: this.maritalStatus,
          gender: this.gender,
          emailAddress: this.emailAddress,
          comments: this.comments,
          leadsUser: this.Username
        };
        console.log(body);

        //funcnameOfUser is 'registerLeads'
        this.server.processData(body, '/saveLeads').then((data) => {
          console.log(data);
        }).catch((err) => {
          console.log(err)
        })

    //   } else {
    //     this.store.get('leads').then((val) => {

    //       if (val) this.leadArray = val;
    //       this.storedetails();
    //     });
    //   }
    // }); 
    this.loadingCtrl.create({
      content: 'Saving...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
    this.navCtrl.setRoot('DeliveredPage');
  }




  storedetails() {
    let body = {
      nameOfUser: this.nameOfUser,
      phoneNum: this.phoneNum,
      products: this.products,
      occupation: this.occupation,
      dateOfBirth: this.dateOfBirth,
      address: this.address,
      maritalStatus: this.maritalStatus,
      gender: this.gender,
      emailAddress: this.emailAddress,
      status: this.status,
      comments: this.comments
    };
    this.leadArray.push(body);
    this.store.set('leads', this.leadArray, );
  }

}