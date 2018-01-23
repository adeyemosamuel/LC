import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-openleads',
  templateUrl: 'openleads.html',
})
export class OpenleadsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenleadsPage');
  }

  pendingLeads(){
    this.navCtrl.push('PendingPage');
  }

  deliveredLeads(){
    this.navCtrl.push('DeliveredPage');
  }

}
