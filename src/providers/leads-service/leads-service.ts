import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LeadsServiceProvider {
  data: any;

  constructor(public http: Http) {
    this.data = '';
    console.log('Hello LeadsServiceProvider Provider');
  }


  getdata() {
 
    return new Promise(resolve => {
      this.http.get('assets/usersJSON.json').map(res => res.json()).subscribe(data => {
        resolve(data);
      });

    });
  }

}
