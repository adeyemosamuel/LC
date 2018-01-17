import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServerServiceProvider } from '../../providers/server-service/server-service';


@IonicPage()
@Component({
  selector: 'page-test3',
  templateUrl: 'test3.html',
})
export class Test3Page {
  data: Array<any> = [];
  _data: any;
  
  title:any;

  constructor(public navCtrl: NavController, private server: ServerServiceProvider,public navParams: NavParams) {
  
  }

  async ionViewDidLoad() {
    this._data = this.navParams.get('data');
    console.log(this.data);
    await this.SendSectorsId();
  }

  async SendSectorsId(){
    let body={
      sectorId: this._data.id
        };
        let response = await this.server.processData(body, '/getProductBySecId');
        this.data = response;
      
  }

  productsByCategory(item) {
    this.navCtrl.push('Details3Page', {
      data: item
    });
  }

  // toggleTypes(item) {
  //   this.navCtrl.push('RegisterLeadsPage', {
  //     data: this.TYPES, 
  //   });
  // }

  // selectProduct(TYPES){
  //   this.navCtrl.push('RegisterLeadsPage',{
  //     data: this.TYPES,
  //   })
  // }

}
