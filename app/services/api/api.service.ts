import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http'
import {Client} from '../../models/client.model';

@Injectable()

export class ApiService {

  private http: Http;
  public clients;

  constructor(http: Http) {
      this.http = http;
  }

  getClients() {

      this.http.get('http://localhost/app_dev.php/clients')
          .subscribe(
              // Problem here
              response => this.clients = response.json,
              err => console.log(err),
              () => console.log('Get Clients Complete')
          );
      console.log(this.clients);

      return this.clients;
  }

}
