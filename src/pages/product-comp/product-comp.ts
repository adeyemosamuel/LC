import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-product-comp',
  templateUrl: 'product-comp.html',
})
export class ProductCompPage {
  category_type: any[];
  sector_category_type: any[];
  segment = "products";



  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    let localData = this.http.get('assets/product.json').map(res => res.json());
    let local_Data = this.http.get('assets/sector.json').map(res => res.json());
    localData.subscribe(data => {
      this.category_type = data;
      console.log(this.category_type);
    });

    local_Data.subscribe(data => {
      this.sector_category_type = data;
      console.log(this.sector_category_type);
    });
  }
  toggleSection(i) {
    this.category_type[i].open = !this.category_type[i].open;
  }

  toggleItem(i, j) {
    this.category_type[i].children[j].open = !this.category_type[i].children[j].open;
  }

  toggle_Section(i) {
    this.sector_category_type[i].open = !this.sector_category_type[i].open;
  }

  toggle_Item(i, j) {
    this.sector_category_type[i].children[j].open = !this.sector_category_type[i].children[j].open;
  }

  toggleDescription(item) {
    this.navCtrl.push('Test2Page', {
      data: item
    });
  }

  toggle_Description(item) {
    this.navCtrl.push('Test3Page', {
      data: item
    });

  }

}