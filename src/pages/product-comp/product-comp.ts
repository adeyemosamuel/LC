import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ServerServiceProvider } from '../../providers/server-service/server-service';

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
  searchModalData: string = '';

  constructor(
    public navCtrl: NavController,
    private serverService: ServerServiceProvider, 
    public modalCtrl: ModalController, 
    public navParams: NavParams
  ) {}

  async ionViewDidLoad() {
    const response = await this.serverService.getData('/category');
    this.data = response;
    console.log(this.data);

    const sectorres = await this.serverService.getData('/sectors');
    this.sectors = sectorres;
    console.log(this.sectors);
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

  searchModal(){
    let modal = this.modalCtrl.create('SearchmodalPage');
    modal.present();
    modal.onDidDismiss(data => {
      console.log(data);
      this.searchModalData = data;
    });
   }



  getItems(ev) {
    if (this.segment === 'products') {
      this.filterProducts(ev);
    } else {
      this.filterSectors(ev);
    }
  }

  filterProducts(ev) {
    this.category_type = this._data;
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.category_type = this.category_type.filter((item) => {
        return (item.product_category.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }

  }

  filterSectors(ev) {
    this.sector_category_type = this._sectors;
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.sector_category_type = this.sector_category_type.filter((item) => {
        return (item.sector_category.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }

  }
}





