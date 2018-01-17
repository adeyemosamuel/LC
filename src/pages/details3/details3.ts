import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ControllerServiceProvider } from '../../providers/controller-service/controller-service';

@IonicPage()
@Component({
  selector: 'page-details3',
  templateUrl: 'details3.html',
})
export class Details3Page {
title:any;
data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private controller: ControllerServiceProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Details3Page');
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
