import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams } from 'ionic-angular'

@Injectable()
export class ProductdataProvider {
    product: any;
    sector: any;
    apiUrl:string = '/sectors';
    // apiUrl:string = 'http://192.168.8.102:9000/api';
    header: Headers = new Headers();
    

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

    async getService(func): Promise<any> {
        this.header.append('Content-Type', "application/json");
        try {
            const response = await this.http.get(`${this.apiUrl}/${func}`, {headers: this.header}).toPromise();
            return response.json();
        }
        catch (err) {
            console.log(err);
            return "Failed";
        }
    }

    async postService(body, func): Promise<any> {
        this.header.append('Content-Type', "application/json");
        try {
            const response = await this.http.post(`${this.apiUrl}/${func}`, JSON.stringify(body), {headers: this.header}).toPromise();
            return response.json();
        }
        catch (err) {
            console.log(err);
            return "Failed";
        }
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