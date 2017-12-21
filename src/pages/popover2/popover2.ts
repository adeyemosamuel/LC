import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { StorageServiceProvider } from '../../providers/storage-service';
// import { LoginPage } from '../login/login';

@Component({
  selector: 'page-popover2',
  templateUrl: 'popover2.html'
})
export class Popover2Page {

  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private store: StorageServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Popover2Page');
  }

  logout() {
    this.viewCtrl.dismiss();
    this.store.clearStorage('out');
    this.navCtrl.setRoot('LoginPage');
  }

}
