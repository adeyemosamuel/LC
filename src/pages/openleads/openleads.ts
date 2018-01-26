import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-openleads',
  templateUrl: 'openleads.html',
})
export class OpenleadsPage {
  // leadspending:  Array<any> = [];
  // leadsdelivered:  Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private serverService: ServerServiceProvider, private store: Storage) {
  }

  ionViewDidLoad() {
  //  this.getPendingLeadsFromServer();
  //  this.getDeliveredLeadsFromServer();
  }

//   async getPendingLeadsFromServer() {
//     let _username: string = await this.store.get('username');
//     let body = {
//       // username: _username
//       username: 'morayo.temi-bello' 
//     };

//     try {
//       let response = await this.serverService.processData(body, '/checkleads');
//       console.log(response);
//       this.leadspending = response;
//     } catch(err) {
//       console.log(err);
//     }

// }


//     //get delivered leads number from server
//     async getDeliveredLeadsFromServer() {
//       let _username: string = await this.store.get('username');
//       let body = {
//         // username: _username
//         username: 'morayo.temi-bello' 
//       };
  
//       try {
//         let response = await this.serverService.processData(body, '/checkleads');
//         console.log(response);
//         this.leadsdelivered = response;
//       } catch(err) {
//         console.log(err);
//       }
  
//     }




  pendingLeads(){
    this.navCtrl.push('PendingPage');
  }

  deliveredLeads(){
    this.navCtrl.push('DeliveredPage');
  } 

}
