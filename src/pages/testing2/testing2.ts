import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-testing2',
  templateUrl: 'testing2.html',
})
export class Testing2Page {

  p: any;
  r: any;
  n: any;
  nRadio: any = 'year';
  TI :any;
  MR :any;
  TP :any;
  LD :any;
  isSubmitted:boolean=false;
  //  postedP ;
  // postedR ;
  // postedD ;
  // postedRadio;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calculateInterest() {
    console.log('button clicked');
 
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

