import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams} from 'ionic-angular';
// import 'rxjs/add/operator/do';


@Injectable()
export class AtmdataProvider {
data:any;
branches:any;
direction;
key;
// filter: any;
  constructor(public http: Http) 
  {
    this.direction = 'https://maps.googleapis.com/maps/api/geocode/json?';
    this.key='AIzaSyBejRUgJY2hG3VWN2Yb5LkYSQHI_7fnRo0';
    console.log('Hello AtmdataProvider Provider');
  }

  getdata(){

return new Promise(resolve => {
             this.http.get('assets/atm2.json').map(res => res.json()).subscribe(data => {
                 this.data = data;
                 resolve(this.data);
             });
  
         });
    }


    getbranches(){
      
    return new Promise(resolve => {
                 this.http.get('assets/branches2.json').map(res => res.json()).subscribe(branches => {
                     this.branches = branches;
                     resolve(this.branches);
                 });
      
             });
        }

        // getLongLat(address){
        //     return this.http.get(this.direction+'address='+address+'&key='+this.key)
        //     .map(res => res.json())
        //     /* .map (res => res[0] || {}  ) */
        //     .map(res=> res.results[0])
        //     .map(res=> res.geometry)
        //     .map(res=> res.location)
        //     .do((location)=>{
        //         console.log(location.lat + ' ' +location.long);
        //      });
        //     }

    

            
           

            

  }