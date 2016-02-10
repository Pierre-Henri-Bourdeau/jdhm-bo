import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http'
import {Client} from '../../interfaces/client.interface';

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

  postAPI(url: string, data) {
      return this.http.post(this.baseURL + url, JSON.stringify(data))
  }

  getClients() {
      return this.callAPI('/clients');
  }

  updateClient(client: Client) {
      return this.postAPI('/client', client);
  }

}
