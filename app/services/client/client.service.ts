import {Injectable} from 'angular2/core';
import {ApiService} from '../../services/api/api.service';
import {Client} from '../../interfaces/client.interface';

@Injectable()

export class ClientService {

    constructor(private apiService: ApiService) {}

    /*
    * Get Clients
    */
    public getClients(): any {
        return this.apiService.get('/client/');
    }

    /*
    * Update a client
    */
    public updateClient(client: Client) {
        return this.apiService.post('/client/update', client);
    }

}
