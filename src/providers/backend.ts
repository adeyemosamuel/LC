import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';

@Injectable()
export class BackendProvider {
  // apiUrl: string = 'http://192.168.1.30:8082/fashion';
  apiUrl: string = '/api/fashion';
  // imageUrl: string = 'http://192.168.1.30:8082';
  imageUrl: string = '/api';
  header: Headers = new Headers();

  constructor(public http: Http) {
    this.header.append('Content-Type', 'application/json');
  }

  async postService(body, funcName): Promise<any> {
    try {
      let response = await this.http.post(`${this.apiUrl}/${funcName}`, JSON.stringify(body), {headers: this.header})
      .timeout(20000)
      .toPromise();
      return response.json();
    } catch (err) {
      console.log(err);
      return 'Failed';
    }
  }

  async getService(path): Promise<any> {
    try {
      let response = await this.http.get(`${this.apiUrl}/${path}`, {headers: this.header})
      .timeout(20000)
      .toPromise();
      return response.json();
    } catch (err) {
      console.log(err);
      return 'Failed';
    }
  }

}

