import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  Username: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private store: Storage) {
    
  }

  ionViewDidLoad() {
    this.getUsername();
      
    }

    async getUsername(){
      this.store.get('Username').then((val) => {
        this.Username = val;
  
      });
    }
  

  accountOpeningPage(){
    this.navCtrl.setRoot('LoginPage')
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
      this.navCtrl.push('ProductCompPage')
    }

    

}
