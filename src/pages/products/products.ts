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
    this.navCtrl.setRoot('CalculatorHomePage')
    }

    locateUs(){
      this.navCtrl.setRoot('Atm2Page')
    }

    leadManagement(){
      this.navCtrl.setRoot('OpenleadsPage')
    }

    bankProducts(){
      this.navCtrl.setRoot('ProductCompPage')
    }

    

}
