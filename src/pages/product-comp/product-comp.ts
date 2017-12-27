import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProductdataProvider } from '../../providers/productdata/productdata';


@IonicPage()
@Component({
  selector: 'page-product-comp',
  templateUrl: 'product-comp.html',
})
export class ProductCompPage {
  category_type: any[];
  sector_category_type: any[];
  segment = "products";
  data: any;
  _data: any;
  sectors: Array<any> = [];
  _sectors: Array<any> = [];



  constructor(public navCtrl: NavController, public Data: ProductdataProvider, public navParams: NavParams, private http: Http) {
    // let localData = this.http.get('assets/product.json').map(res => res.json());
    // let local_Data = this.http.get('assets/sector.json').map(res => res.json());
    // localData.subscribe(data => {
    //   this.category_type = data;
    //   this._data= data;
    //   console.log(this.category_type);
    // });


    // local_Data.subscribe(data => {
    //   this.sector_category_type = data;
    //   this._sectors = data;
    //   console.log(this.sector_category_type);
    // });


  }
  async ionViewDidLoad() {
    const response = await this.Data.getService('category');
    // console.log(response[0]);
    this.data = response;
    console.log(this.data);
    
    const sectorres= await this.Data.getService('sectors');
    this.sectors = sectorres;
    console.log(this.sectors);
    
}

  // toggleSection(i) {
  //   this.category_type[i].open = !this.category_type[i].open;
  // }

  // toggleItem(i, j) {
  //   this.category_type[i].children[j].open = !this.category_type[i].children[j].open;
  // }

  // toggle_Section(i) {
  //   this.sector_category_type[i].open = !this.sector_category_type[i].open;
  // }

  // toggle_Item(i, j) {
  //   this.sector_category_type[i].children[j].open = !this.sector_category_type[i].children[j].open;
  // }

  // toggleDescription(item) {
  //   this.navCtrl.push('Test2Page', {
  //     data: item
  //   });
  // }

  // toggle_Description(item) {
  //   this.navCtrl.push('Test3Page', {
  //     data: item
  //   });

  // }


  getItems(ev) {
    if (this.segment === 'products') {
      this.filterProducts(ev);
    } else {
      this.filterSectors(ev);
    }
  }

  filterProducts(ev) {
    this.data = this.data;
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.data = this.data.filter((item) => {
        return (item.categoryName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }

  }

  filterSectors(ev) {
    this.sectors = this.sectors;
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.sectors = this.sectors.filter((item) => {
        return (item.sectorName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }

  }

}