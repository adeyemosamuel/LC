import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController  } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-searchmodal',
  templateUrl: 'searchmodal.html',
})
export class SearchmodalPage {
  data: Array<string> = [];
  _data: Array<string> = [];
  _data1: Array<string> = [];
  data1: Array<string> = [];
  _data2: Array<string> = [];
  data2: Array<string> = [];
  data3: Array<string> = [];
  selectedE: string = '';

  constructor( private http: Http,public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController, public modalCtrl: ModalController) {
    let localData = this.http.get('assets/paul.json').map(res => res.json());
    localData.subscribe(data => {
      for (let val of data) {
        for (let newVal of val.Product_data) {
          this.data.push(newVal.TYPES);
        }
      }
      this._data = this.data;
      console.log(data);
      
    });
    let localData1 = this.http.get('assets/sector.json').map(res => res.json());
    localData1.subscribe(data => {
      for (let val of data) {
        for (let newVal of val.sector_category_data) {
          this.data1.push(newVal.sector_type_benefits);
        }
      }
      this._data1 = this.data1;

      
    });

    let localData2 = this.http.get('assets/product.json').map(res => res.json());
    localData2.subscribe(data => {
      for (let val of data) {
        for (let newVal of val.category_data) {
          this.data2.push(newVal.type_benefits);
        }
      }
      this._data2 = this.data2;
    
      
    });

    this.data = this.data.concat(this.data1, this.data2);
    console.log(this.data3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
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

  selectCancel() {
    this.viewCtrl.dismiss('');
  }

}
