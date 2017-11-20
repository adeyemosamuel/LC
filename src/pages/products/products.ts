import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  loanCalculator(){
    this.navCtrl.push('CalculatorHomePage')
    }

    locateUs(){
      this.navCtrl.push('Atm2Page')
    }

    leadManagement(){
      this.navCtrl.push('LeadsPage')
    }

    bankProducts(){
      this.navCtrl.push('CompendiumPage')
    }

}
