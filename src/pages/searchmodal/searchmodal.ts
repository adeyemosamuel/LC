import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController  } from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-searchmodal',
  templateUrl: 'searchmodal.html',
})
export class SearchmodalPage {
  dat: Array<string> = [];
  _dat: Array<string> = [];
  // _data1: Array<string> = [];
  // data1: Array<string> = [];
  // _data2: Array<string> = [];
  // data2: Array<string> = [];
  // data3: Array<string> = [];
  selectedE: string = '';
  // keywords: string='';

  constructor( private http: Http,public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController, public modalCtrl: ModalController) {
    let localData1 = this.http.get('assets/merge.json').map(res1 => res1.json());
    localData1.subscribe(dat => {
      for (let val of dat) {
        for (let newVal of val.categories.category_data) {
          this.dat.push(newVal);
        }
      }
      this._dat = this.dat;
      console.log(dat);
      console.log(this._dat);
      
      
    });
    // let localData1 = this.http.get('assets/sector.json').map(res => res.json());
    // localData1.subscribe(data => {
    //   for (let val of data) {
    //     for (let newVal of val.sector_category_data) {
    //       this.data1.push(newVal.sector_type_benefits);
    //     }
    //   }
    //   this._data1 = this.data1;

      
    // });

    // let localData2 = this.http.get('assets/product.json').map(res => res.json());
    // localData2.subscribe(data => {
    //   for (let val of data) {
    //     for (let newVal of val.category_data) {
    //       this.data2.push(newVal.type_benefits);
    //     }
    //   }
    //   this._data2 = this.data2;
    
      
    // });

    // this.data = this.data.concat(this.data1, this.data2);
    // console.log(this.data3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }


  

  getItems(ev) {
    this.dat = this._dat;
    var val = ev.target.value;

    if (val && val.trim() != '') {
        this.dat = this.dat.filter((item) => {
          //console.log(item.keywords);
          return (item._keywords.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
