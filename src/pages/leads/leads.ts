import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LeadsServiceProvider } from '../../providers/leads-service/leads-service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-leads',
  templateUrl: 'leads.html',
})
export class LeadsPage {
data: any;
selectedItem: any;
leads: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private leadsServiceProvider: LeadsServiceProvider) {
    this.selectedItem = navParams.get('item');
    let localData = this.http.get('assets/usersJSON.json').map(res => res.json());
    localData.subscribe(data => {
      this.data= data.data;
      console.log(this.data);
    });
  }

  ionViewDidLoad() {
    this.leadsServiceProvider.getdata().then(data => {
      this.leads = data;
    })
  }

  ionViewWillUnload() {
    this.leads = [];
  }

  itemTapped(event, item) {
    this.navCtrl.push('LeadsDetailsPage', {
      item: item
    });
  }

  addLead(){
    this.navCtrl.push('RegisterLeadsPage')
  }

}
