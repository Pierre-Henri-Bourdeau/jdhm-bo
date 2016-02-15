import {Component, View} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ClientService} from '../../services/client/client.service';
import {Client} from '../../interfaces/client.interface';
import {ApiService} from '../../services/api/api.service';
import {EditClientComponent} from './editClient.component';

import {ClientClass} from '../../class/client.class';

@Component({
    providers: [ClientService, ApiService, EditClientComponent]
})
@View({
    templateUrl: './app/components/client/client.component.html',
    directives: [EditClientComponent]
})

export class ClientComponent implements OnInit {

    public clients: Client[];
    public errorMessage: string;

    constructor(private clientService: ClientService, private editClientComponent: EditClientComponent) {}

    ngOnInit() {
        this.getClients();
    }

    /*
    * Set the client list
    */
    public getClients(): void {
        this.clientService.getClients()
            .subscribe(
                clients => this.clients = clients,
                error =>  this.errorMessage = <any>error
            );
    }
}
