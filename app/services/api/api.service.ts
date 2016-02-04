import {Injectable} from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS } from 'angular2/http'
import 'rxjs/add/operator/map';

@Injectable()

export class ApiService {

  public people: string[];

  constructor(http: Http) {
      http.get('http://jdhm-api/app_dev.php/clients')
          .map(res => res.json())
          .subscribe(people => this.people = people);
  }

  getClients() {
      return this.people;
  }

}
