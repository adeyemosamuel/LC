import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, AlertOptions } from 'ionic-angular';
import { ControllerServiceProvider } from '../../providers/controller-service';
import { ServerServiceProvider } from '../../providers/server-service';
import { StorageServiceProvider } from '../../providers/storage-service';
// import { BioPage } from '../bio/bio';
// import { HomePage } from '../home/home';
// import { LoginPage } from '../login/login';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {
  firstName: string;
  accountNo: any;
  alertOptions: AlertOptions;
  mandate: any;
  photo: any;
  username: any;
  password: any;
  resp: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, 
  private controller: ControllerService, private serverservice: ServerService, private store: StorageService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');

    this.alertOptions = {
      title: 'Success',
      message: 'Submit Mandate',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.submitMandate();
          }
        }
      ]
    };
    let alert = this.alertCtrl.create(this.alertOptions);
    alert.present();

    this.firstName = this.navParams.get('firstName');
    this.accountNo = this.navParams.get('newAccount');
    this.mandate = this.navParams.get('mandate');
    this.photo = this.navParams.get('photo');
  }

  submitMandate()
  {
    // let loader = this.controller.loadCtrl('Processing...');
    // loader.present();

    // let body = {
    //   'customermandate':this.mandate.split(',')[1],
    //   'acctno': this.accountNo,
    //   'customersignature': this.photo.split(',')[1]
    // }
    // var funcName = '/customermandate';

    // this.serverservice.processData(body, funcName).then((value) => {
    //   loader.dismiss();
    //   this.resp = value;

    //   if (this.resp.responseCode == '76')
    //   {
    //     this.controller.toastCtrl(this.resp.message, 'middle', false);
    //   }
    //   else if (this.resp.responseCode == '96')
    //   {
    //     this.controller.toastCtrl(this.resp.message, 'middle', false);
    //   }
    //   else
    //   {
    //     this.controller.toastCtrl(this.resp.message, 'middle', false);
    //   }
    // }).catch(err => console.log(err));
  }

  openNew() {
    this.store.clearStorage('in');
    this.navCtrl.popTo('BioPage');
  }

  goHome() {
    this.store.clearStorage('in');
    this.navCtrl.setRoot('HomePage');
  }

  logOut() {
    this.store.clearStorage('out');
    this.navCtrl.setRoot('LoginPage');
  }

}
