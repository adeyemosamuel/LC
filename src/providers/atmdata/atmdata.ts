import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams } from 'ionic-angular'

@Injectable()
export class AtmdataProvider {
    data: any;
    branches: any;
    direction;
    key;

    constructor(public http: Http) {
        this.direction = 'https://maps.googleapis.com/maps/api/geocode/json?';
        this.key = 'AIzaSyBejRUgJY2hG3VWN2Yb5LkYSQHI_7fnRo0';
        console.log('Hello AtmdataProvider Provider');
    }

    getdata() {

        return new Promise(resolve => {
            this.http.get('assets/atm2.json').map(res => res.json()).subscribe(data => {
                this.data = data;
                resolve(this.data);
            });

        });
    }


    getbranches() {

        return new Promise(resolve => {
            this.http.get('assets/branches2.json').map(res => res.json()).subscribe(branches => {
                this.branches = branches;
                resolve(this.branches);
            });

        });
    }

}