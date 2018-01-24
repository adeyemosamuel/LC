import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ControllerServiceProvider } from '../../providers/controller-service/controller-service';

@IonicPage()
@Component({
  selector: 'page-lajub',
  templateUrl: 'lajub.html',
})
export class LajubPage {
  p: any;
  r: number = 27;
  n: any; 
  nRadio: any = 'month';
  TI :any;
  MR :any;
  TP :any;
  LD :any;
  TOR:any;
  isSubmitted:boolean=false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private controller: ControllerServiceProvider) {
  }

  calculateInterest() {
    console.log('button clicked'); 
 
    if (this.nRadio !== 'month') {
      this.n = this.n;
    }
    this.TI = ((this.p * this.r * (this.n)*0.0833333)/100).toFixed(2);
    this.MR = ((parseInt(this.TI) + parseInt(this.p))/((this.n))).toFixed(2);
    this.TP = (parseInt(this.TI) + parseInt(this.p)).toFixed(2);
    this.LD = (((this.p)) - ((this.p) * 0.02)).toFixed(2) ;
    this.TOR= ((parseInt(this.TP))-parseInt(this.MR)).toFixed(2);
    this.isSubmitted = true;
  }
  popover(ev) {
    let pop = this.controller.miscPopOver('PopoverPage', ev);
    pop.present({ev: ev});
    pop.onDidDismiss((data) => {
        if (data)
            this.navCtrl.setRoot(data);
    });
  }

   
}

