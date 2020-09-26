import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor(public http: Http) { }

  handleError(error: any): Promise<any> {
    console.log('error ', error);
    return Promise.reject(error);
  }

  getTech(): Promise<any> {
    const URL = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(URL, { headers: headers})
        .toPromise()
        .then(response => 
          response.json() as any[] )
        .catch(this.handleError);
  }
}
