import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServerServiceProvider } from '../../providers/server-service/server-service';

@IonicPage()
@Component({
  selector: 'page-test2',
  templateUrl: 'test2.html',
})
export class Test2Page {

  data: Array<any> = [];
  _data: any;
  title: any;
  

  constructor(public navCtrl: NavController, private server: ServerServiceProvider, public navParams: NavParams) {
  }

  async ionViewDidLoad() {
    this._data = this.navParams.get('data');
    this.title= this.navParams.get('title');
    await this.SendCategoryId();
  } 

  


async SendCategoryId(){
  let body={
    categoryId: this._data.id
      };
  let response = await this.server.processData(body, '/getProductByCatId');
  this.data = response;


}

productsByCategory(item, categoryName) {
  this.navCtrl.push('Details2Page', {
    data: item,
    title: categoryName
  });
}

 
}
