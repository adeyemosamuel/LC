import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  username: string = '';
  password: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LandingPage');
  // }

  submit(){
    this.navCtrl.setRoot('ProductsPage');
    console.log(this.username);
    console.log(this.password);
  }


}



