import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';
import { LeadsServiceProvider } from '../../providers/leads-service/leads-service';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html',
})
export class PendingPage {
  loading: any;
  data: any;
  selectedItem: any;
  leadsArray: Array<any> = [];
  storage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private store: Storage,
     public loadingCtrl: LoadingController,
  
    private serverService: ServerServiceProvider) {

  }
  ionViewDidLoad() {
    this.loading = this.loadingCtrl.create({
      spinner: 'custom-spinner',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`
    });
    this.getLeadsFromServer();
    this.loading.dismiss()
  }


  itemTapped(item) {
    this.navCtrl.push('LeadsDetailsPage', {
      item: item
    });
  }

  addLead(){ 
    this.navCtrl.push('RegisterLeadsPage')
  }
 
  // getLeads() {
  //   this.store.get('leads').then((val) => {
  //     // console.log(val);
  //     this.leadsArray = val;

  //   });
  // }

//get leads from server
  async getLeadsFromServer() {
    let _username: string = await this.store.get('username');
    let body = {
      // username: _username
      username: 'morayo.temi-bello'
    };

    try {
      let response = await this.serverService.processData(body, '/showListPending');
      console.log(response);
      this.leadsArray = response;
      this.store.set('leadsArray', this.leadsArray);
      // if (response.responseCode === '76') {
      //   this.leadsArray.push(response.leads);
      // } else {
      //   console.log(response.message);
      // }
    } catch(err) {
      console.log(err);
    }
  }

}
