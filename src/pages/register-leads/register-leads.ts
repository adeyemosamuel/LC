import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
// import { ModalPage } from '../modal/modal';




@IonicPage()
@Component({
  selector: 'page-register-leads',
  templateUrl: 'register-leads.html',
})
export class RegisterLeadsPage {
  selectedProduct: string = '';
  
  
   
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
     
     }
     
     selectProductModal(){
      let modal = this.modalCtrl.create('ModalPage');
      modal.present();
      modal.onDidDismiss(data => {
        console.log(data);
        this.selectedProduct = data;
      });
     }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterLeadsPage');
  }

 

}
