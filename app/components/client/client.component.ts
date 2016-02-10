import {Component, View} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ClientService} from '../../services/client/client.service';
import {Client} from '../../interfaces/client.interface';
import {ApiService} from '../../services/api/api.service';
import {EditClient} from './editClient.component';

@Component({
    providers: [ClientService, ApiService, EditClient]
})
@View({
    templateUrl: './app/components/client/client.component.html',
    directives: [EditClient]
})

export class ClientComponent implements OnInit {

    public clients: Client[];
    public selectedClient: Client;

    constructor(private _clientService: ClientService, private _editClient: EditClient) {
    }

    ngOnInit() {
        this.getClients();
    }

    /*
    * Please read https://angular.io/docs/ts/latest/guide/server-communication.html#!#sts=Subscribe%20in%20the%20HeroListComponent
    * Try to use Promise instead
    */
    getClients() {
        this._clientService.getClientsFromApi()
            .subscribe(
                response => this.clients = response.json() ,
                err => console.log(err),
                () => console.log('Get Clients Complete'));
    }

    editClient(client: Client) {
        this.selectedClient = client;
    }

}
