import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams } from 'ionic-angular'

@Injectable()
export class ProductdataProvider {
    product: any;
    sector: any;
    

    constructor(public http: Http) {
        
        console.log('Hello ProductdataProvider Provider');
    }

    getdata() {

        return new Promise(resolve => {
            this.http.get('assets/product.json').map(res => res.json()).subscribe(product => {
                this.product = '';
                resolve(this.product);
            });

        });
    }


    getsector() {

        return new Promise(resolve => {
            this.http.get('assets/sector.json').map(res => res.json()).subscribe(sector => {
                this.sector = '';
                resolve(this.sector);
            });

        });
    }

}