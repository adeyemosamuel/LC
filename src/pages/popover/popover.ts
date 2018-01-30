import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
// import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  gohome(pageName){
    // this.navCtrl.setRoot('ProductsPage');
    this.viewCtrl.dismiss(pageName);
  }

  logout(pageName){
    this.viewCtrl.dismiss(pageName);
    // this.store.clearStorage('leads');
    this.navCtrl.setRoot('LandingPage');
  }

}
