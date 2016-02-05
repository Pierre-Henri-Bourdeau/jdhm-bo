import {CLIENTS} from './mock-clients';
import {Injectable} from 'angular2/core';
import {ApiService} from '../../services/api/api.service';

@Injectable()

export class ClientService {

    constructor(private _apiService: ApiService) {
    }

    getClients() {
        return Promise.resolve(CLIENTS);
    }
    getApiClients() {
        return Promise.resolve(this._apiService.getClients());
    }
}
