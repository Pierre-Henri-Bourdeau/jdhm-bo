import {Component, View} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ClientService} from '../../services/client/client.service';
import {Client} from '../../models/client.model';
import {ApiService} from '../../services/api/api.service';

@Component({
    providers: [ClientService, ApiService]
})
@View({
  templateUrl: './app/components/client/client.component.html',

})
export class ClientComponent implements OnInit {

    public clients: Client[];

    constructor(private _clientService: ClientService, private _apiService: ApiService) {
    }

    ngOnInit() {
        this.getClients();
    }

    getClients() {
        this._clientService.getClients().then(clients => this.clients = clients);
        // Test
        this._clientService.getApiClients().then(clients => this.clients = clients);
    }
}
