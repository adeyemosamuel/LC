import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

@Injectable()
export class AtmdataProvider {
data:any;
branches:any;
  constructor(public http: Http) 
  {
    console.log('Hello AtmdataProvider Provider');
  }

  getdata(){
  
return new Promise(resolve => {
             this.http.get('assets/atm.json').map(res => res.json()).subscribe(data => {
                 this.data = data;
                 resolve(this.data);
             });
  
         });
    }

    getbranches(){
      
    return new Promise(resolve => {
                 this.http.get('assets/branches.json').map(res => res.json()).subscribe(branches => {
                     this.branches = branches;
                     resolve(this.branches);
                 });
      
             });
        }
  }