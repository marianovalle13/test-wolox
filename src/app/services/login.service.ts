import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: Http) { }

  handleError(error: any): Promise<any> {
    console.log('error ', error);
    return Promise.reject(error);
  }

  login(values): Promise<any> {
    const URL = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(URL, JSON.stringify(values), { headers: headers })
        .toPromise()
        .then(response => response)
        .catch(this.handleError);
  }
}
