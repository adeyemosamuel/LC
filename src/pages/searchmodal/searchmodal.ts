import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { ServerServiceProvider } from '../../providers/server-service/server-service';

@IonicPage()
@Component({
  selector: 'page-searchmodal',
  templateUrl: 'searchmodal.html',
})
export class SearchmodalPage {
  data: Array<any> = [];
  _data: Array<any> = [];
  products: string = '';
 

  constructor( private http: Http,public navCtrl: NavController,private server: ServerServiceProvider, public navParams: NavParams,public viewCtrl:ViewController, public modalCtrl: ModalController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  async getProductsData() {
    const response = await this.server.getData('/products');
    this.data = response;
    this._data=response;
  }
  

  getItems(ev) {
    this.data = this._data;
    var val = ev.target.value;

    if (val && val.trim() != '') {
        this.data = this.data.filter((item) => {
        
          return (item.productName._keywords.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
      } 

}

  selectCancel() {
    this.viewCtrl.dismiss('');
  }

  toggleDescription(item, title) {
    console.log(item);
    console.log(title);
    // console.log(title);
    this.navCtrl.push('Details3Page', {
      data: item, title:title
    });
  }

}
