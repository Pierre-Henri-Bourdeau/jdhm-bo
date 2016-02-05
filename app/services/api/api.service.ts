import {Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http'
import {Client} from '../../models/client.model';

@Injectable()

export class ApiService {

  private http: Http;
  public clients: Client[];

  constructor(http: Http) {
      this.http = http;
  }

  getClients() {
      // Read this: https://coryrylan.com/blog/angular-2-observable-data-services
      this.http.get('http://jdhm/app_dev.php/clients')
          .subscribe(
              response => this.clients = response.json() ,
              err => console.log(err),
              () => console.log('Get Clients Complete')
          );
  }


}
