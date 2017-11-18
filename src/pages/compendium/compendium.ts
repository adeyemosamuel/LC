import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-compendium',
  templateUrl: 'compendium.html',
})
export class CompendiumPage {
  TYPES: any[];
  
   
  
    constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
      let localData = this.http.get('assets/paul.json').map(res => res.json());
      localData.subscribe(data => {
        this.TYPES =data;
        console.log(this.TYPES);
      });
     }
     toggleSection(i){
       this.TYPES[i].open = !this.TYPES[i].open;
       }
 
       toggleItem(i,j){
         this.TYPES[i].children[j].open = !this.TYPES[i].children[j].open;
       }
        
       toggleDescription(item) {
         this.navCtrl.push('TestPage', {
           data: item
         });
       }
 
 }
 