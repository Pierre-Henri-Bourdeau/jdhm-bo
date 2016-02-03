import {Component, View} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ClientService} from '../../services/client/client.service';
import {Client} from '../../models/client.model';

@Component({
    providers: [ClientService]
})
@View({
  templateUrl: './app/components/client/client.component.html',

})
export class ClientComponent implements OnInit {

    public clients: Client[];

    constructor(private _clientService: ClientService) {
    }

    ngOnInit() {
        this.getClients();
    }

    getClients() {
        this._clientService.getClients().then(clients => this.clients = clients);
    }
}
