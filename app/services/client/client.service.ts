import {Injectable} from 'angular2/core';
import {ApiService} from '../../services/api/api.service';
import {Client} from '../../interfaces/client.interface';



@Injectable()

export class ClientService {

    constructor(private apiService: ApiService) {
    }

    /*
    * Get Clients from API
    */
    getClients() {
        return this.apiService.getClients();
    }

    updateClient(client: Client) {
        return this.apiService.updateClient(client);
    }

}
