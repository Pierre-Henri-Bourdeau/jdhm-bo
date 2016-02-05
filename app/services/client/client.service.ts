import {CLIENTS} from './mock-clients';
import {Injectable} from 'angular2/core';
import {ApiService} from '../../services/api/api.service';

@Injectable()

export class ClientService {

    constructor(private _apiService: ApiService) {
    }

    /*
    * Get Clients from Mock
    */
    getClientsFromMock() {
        return Promise.resolve(CLIENTS);
    }

    /*
    * Get Clients from API
    */
    getClientsFromApi() {
        return Promise.resolve(this._apiService.getClients());
    }

}
