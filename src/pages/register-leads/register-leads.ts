import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ControllerServiceProvider } from '../../providers/controller-service/controller-service';




@IonicPage()
@Component({
  selector: 'page-register-leads',
  templateUrl: 'register-leads.html',
})
export class RegisterLeadsPage {
  selectedProduct: string = '';
  
  
   
  
    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private controller: ControllerServiceProvider) {
     
     }

     popover(ev) {
      let pop = this.controller.miscPopOver('PopoverPage', ev);
      pop.present({ev: ev});
      pop.onDidDismiss((data) => {
          if (data)
              this.navCtrl.setRoot(data);
      });
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
