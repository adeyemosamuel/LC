import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServerServiceProvider {
  
 url: string = 'http://10.0.33.73:9000/api';
  // url: string = '/api';
  

  constructor(public http: Http) {
    console.log('Hello ServerService Provider');
  }
//post api
  async processData(body, funcName): Promise<any> {
    console.log(body);
    console.log(funcName);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    try {
      let response = await this.http.post(this.url + funcName, JSON.stringify(body), {headers: headers}).toPromise();
      console.log(response.json());
      return response.json();
    }
    catch(err) {
      console.log(err.json());
      return {responseCode: "96", message: err.json().Message};
    }
  }

// get api
async getData(funcName): Promise<any> {
  console.log(funcName);

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  try {
    let response = await this.http.get(this.url + funcName, {headers: headers}).toPromise();
    console.log(response.json());
    return response.json();
  }
  catch(err) {
    console.log(err.json()); 
    return {responseCode: "96", message: err.json().Message};
  }
}

}