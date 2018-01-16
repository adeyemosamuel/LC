import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { ServerServiceProvider } from '../../providers/server-service/server-service';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  data: Array<string> = [];
  _data: Array<string> = [];
  products: string = ''; 

  constructor(public navCtrl: NavController, public navParams: NavParams,private server: ServerServiceProvider,  public viewCtrl: ViewController, private http: Http ) {
    // let localData = this.http.get('assets/paul.json').map(res => res.json());
    // localData.subscribe(data => {
    //   for (let val of data) {
    //     for (let newVal of val.Product_data) {
    //       this.data.push(newVal.TYPES);
    //     }
    //   }
    //   this._data = this.data;
    //   console.log(data);
      
    // });

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  async getProductsData(){
    const response = await this.server.processData(this.products, '/products');
    this.data = response;
    console.log(this.data);
  }


  selectCancel() {
    this.viewCtrl.dismiss('');
  }

  selectDone() {
    this.viewCtrl.dismiss(this.products);
  }

  getItems(ev) {
    this.data = this._data;
    var val = ev.target.value;

    if (val && val.trim() != '') {
        this.data = this.data.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
    }

}
}
