import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-test3',
  templateUrl: 'test3.html',
})
export class Test3Page {
  data: any;
  sector_category_type: string = '';
  sector_type_description: string = '';
  title:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('ionViewDidLoad Test3Page');
    this.title = this.navParams.get('data').sector_category;
    this.data = this.navParams.get('data').sector_category_data;
    console.log(this.data);

  }

  ionViewDidLoad() {
    
    this.sector_category_type = this.data.sector_category_type;
    this.sector_type_description = this.data.sector_type_description;
  }

  ionViewDidEnter() {

  }

  toggleDescription(item, title) {
    this.navCtrl.push('Details3Page', {
      data: item, title:title
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
