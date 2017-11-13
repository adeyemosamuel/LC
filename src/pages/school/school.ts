import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SchoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-school',
  templateUrl: 'school.html',
})
export class SchoolPage {
  principal: any;
  rate: any;
  duration: any;
  durationRadio: string = 'year';
  SI :number;
  isSubmitted:boolean=false;
   postedP ;
  postedR ;
  postedD ;
  postedRadio;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calculateInterest() {
    console.log('button clicked');
 
    if (this.durationRadio !== 'year') {
      this.duration = this.duration / 12;
    }
    this.SI = (this.principal * this.rate * this.duration) / 100;
    this.isSubmitted = true;
   /*  this.postedP = this.principal;
this.postedR = this.rate;
this.postedD = this.duration;
this.postedRadio= this.durationRadio; */

/*     this.principal= '';
    this.rate= '';
    this.duration='';  */
  }

}
