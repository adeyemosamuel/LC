import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ControllerServiceProvider } from '../../providers/controller-service/controller-service';

@IonicPage()
@Component({
  selector: 'page-details2',
  templateUrl: 'details2.html',
})
export class Details2Page {
title:any;
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private controller: ControllerServiceProvider) {
    this.title = this.navParams.get('title');
    this.data = this.navParams.get('data');
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Details2Page');
  }

  popover(ev) {
    let pop = this.controller.miscPopOver('PopoverPage', ev);
    pop.present({ev: ev});
    pop.onDidDismiss((data) => {
        if (data)
            this.navCtrl.setRoot(data);
    });
  }

  addLead(){
    this.navCtrl.push('RegisterLeadsPage')
  }

}
