import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-searchmodal',
  templateUrl: 'searchmodal.html',
})
export class SearchmodalPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController, public modalCtrl: ModalController) {
  }

  selectCancel() {
    this.viewCtrl.dismiss('');
  }

}
