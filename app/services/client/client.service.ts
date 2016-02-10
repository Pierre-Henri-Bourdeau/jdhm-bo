import {CLIENTS} from './mock-clients';
import {Injectable} from 'angular2/core';
import {ApiService} from '../../services/api/api.service';

@Injectable()

export class ClientService {

    constructor(private apiService: ApiService) {
    }

    /*
    * Get Clients from API
    */
    getClientsFromApi() {
        return this.apiService.getClients();
    }

}
