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
        return this.apiService.get('/clients/');
    }

    /*
    * Create a client
    */
    public createClient(client: Client): any {
        return this.apiService.post('/clients/', client);
    }

    /*
    * Update a client
    */
    public updateClient(client: Client): any {
        return this.apiService.put('/clients/'+client.id, client);
    }

    /*
    * Delete a client
    */
    public deleteClient(client: Client): any {
        return this.apiService.delete('/clients/'+client.id, client);
    }

}
