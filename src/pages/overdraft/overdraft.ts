import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OverdraftPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overdraft',
  templateUrl: 'overdraft.html',
})
export class OverdraftPage {
  p: any;
  r: number = 29;
  n: any;
  nRadio: any = 'year';
  TI :any;
  MR :any;
  TP :any;
  LD :any;
  isSubmitted:boolean=false;
  
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

