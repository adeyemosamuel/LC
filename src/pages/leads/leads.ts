import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';
import { LeadsServiceProvider } from '../../providers/leads-service/leads-service';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-leads',
  templateUrl: 'leads.html',
})
export class LeadsPage {
data: any;
selectedItem: any;
leadsArray: Array<any> = [];
storage:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private store: Storage,
    private leadsServiceProvider: LeadsServiceProvider,
    private serverService: ServerServiceProvider
  ) {
    // this.selectedItem = navParams.get('item');
    // let localData = this.http.get('assets/usersJSON.json').map(res => res.json());
    // localData.subscribe(data => {
    //   this.data= data.data;
    //   console.log(this.data);
    // });
    
  }

  ionViewDidLoad() {
    // this.getLeads();
    this.getLeadsFromServer();
  }

  // ionViewWillUnload() {
  //   this.leads = [];
  // }

 



  itemTapped(item) {
    this.navCtrl.push('LeadsDetailsPage', {
      item: item
    });
  }

  addLead(){ 
    this.navCtrl.push('RegisterLeadsPage')
  }
 
  getLeads() {
    this.store.get('leads').then((val) => {
      // console.log(val);
      this.leadsArray = val;

    });
  }
//get leads from server
  async getLeadsFromServer() {
    let _username: string = await this.store.get('username');
    let body = {
      // username: _username
      username: 'morayo.temi-bello' 
    };

    try {
      let response = await this.serverService.processData(body, '/checkleads');
      console.log(response);
      this.leadsArray = response;
      // if (response.responseCode === '76') {
      //   this.leadsArray.push(response.leads);
      // } else {
      //   console.log(response.message);
      // }
    } catch(err) {
      console.log(err);
    }
  }

  notifications(){
    this.navCtrl.push('ReminderPage');
  }

}
