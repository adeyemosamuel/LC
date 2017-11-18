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
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  data: any;
  TYPES: string = '';
  DESCRIPTION: string = '';
  title:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('ionViewDidLoad TestPage');
    this.title = this.navParams.get('data').Product;
    this.data = this.navParams.get('data').Product_data;
    console.log(this.data);

  }

  ionViewDidLoad() {
    
    this.TYPES = this.data.TYPES;
    this.DESCRIPTION = this.data.DESCRIPTION;
  }

  ionViewDidEnter() {

  }

  toggleDescription(item, title) {
    this.navCtrl.push('DetailsPage', {
      data: item, title:title
    });
  }

}
