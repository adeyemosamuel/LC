import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test2',
  templateUrl: 'test2.html',
})
export class Test2Page {
  data: any;
  category_type: string = '';
  type_description: string = '';
  title:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('ionViewDidLoad TestPage');
    this.title = this.navParams.get('data').product_category;
    this.data = this.navParams.get('data').category_data;
    console.log(this.data);

  }

  ionViewDidLoad() {
    
    this.category_type = this.data.category_type;
    this.type_description = this.data.type_description;
  }

  ionViewDidEnter() {

  }

  toggleDescription(item, title) {
    this.navCtrl.push('Details2Page', {
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
