import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http'

@Injectable()

export class ApiService {

  private http: Http;
  private baseURL: string;

  constructor(http: Http) {
      this.http = http;
      this.baseURL = 'http://jdhm-api/app_dev.php';
  }

  callAPI(url:string): any {
      return this.http.get(this.baseURL + url);
  }

  getClients() {
      return this.callAPI('/clients');
  }

}
