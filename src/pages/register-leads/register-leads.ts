import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-register-leads',
  templateUrl: 'register-leads.html',
})
export class RegisterLeadsPage {



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterLeadsPage');
  }

}
