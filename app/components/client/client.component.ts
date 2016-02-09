import {Component, View} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ClientService} from '../../services/client/client.service';
import {Client} from '../../interfaces/client.model';
import {ApiService} from '../../services/api/api.service';

@Component({
    providers: [ClientService, ApiService]
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

}
