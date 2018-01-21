import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ControllerServiceProvider } from '../../providers/controller-service/controller-service';



@IonicPage()
@Component({
  selector: 'page-finance',
  templateUrl: 'finance.html',
})
export class FinancePage {
  p: any;
  r: number = 26;
  n: any;
  nRadio: any = 'year';
  TI :any;
  MR :any;
  TP :any;
  LD :any;
  isSubmitted:boolean=false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private controller: ControllerServiceProvider) {
  }

  calculateInterest() {
    console.log('button clicked');
    if (this.p <= 20000000) {
      if (this.nRadio !== 'year') {
        this.n = this.n;
      }
      this.TI = (this.p * this.r * this.n) / 100;
      this.MR = (parseInt(this.TI) + parseInt(this.p)) / 12;
      this.TP = (parseInt(this.TI) + parseInt(this.p));
      this.LD = ((this.p)) - ((this.p) * 0.02) ;
      this.isSubmitted = true; 
    }
    
    
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

