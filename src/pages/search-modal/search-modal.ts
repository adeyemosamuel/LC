import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AtmdataProvider } from '../../providers/atmdata/atmdata';


@IonicPage()
@Component({
  templateUrl: 'search-modal.html',
})
export class SearchModalPage {
  category_type: any[];
  sector_category_type: any[];
  segment = "products";
  data: any;
  _data: any;
  sectors: Array<any> = [];
  _sectors: Array<any> = [];
// dd:any

  constructor(public navCtrl: NavController,public viewCtrl:ViewController, public modalCtrl: ModalController,public Data: AtmdataProvider, public navParams: NavParams, private http: Http) {
    let localData = this.http.get('assets/product.json').map(res => res.json());
    let local_Data = this.http.get('assets/sector.json').map(res => res.json());
    localData.subscribe(data => {
      this.category_type = data;
    // this.Data.getdata().then((res: any) => {
    //   this.dd = res;
    //   console.log(this.dd);
    })
 


    local_Data.subscribe(data => {
      this.sector_category_type = data;
      this._sectors = data;
      console.log(this.sector_category_type);
    });


  }
//   async ionViewDidLoad() {
//     const response = await this.Data.getService('category');
//     // console.log(response[0]);
//     this.data = response;
//     console.log(this.data);
    
//     const sectorres= await this.Data.getService('sectors');
//     this.sectors = sectorres;
//     console.log(this.sectors);
    
// }


  // getItems(ev) {
   
  //     this.filterSectors(ev);
  //   }


  // filterSectors(ev) {
  //   this.sector_category_type = this._sectors;
  //   var val = ev.target.value;

  //   if (val && val.trim() != '') {
  //     this.sector_category_type = this.sector_category_type.filter((item) => {
  //       return (item.sector_category.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     });
  //   }

  // }

  selectCancel() {
    this.viewCtrl.dismiss('');
  }

}
