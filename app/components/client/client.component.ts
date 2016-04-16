import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ClientService} from '../../services/client/client.service';
import {Client} from '../../interfaces/client.interface';
import {ApiService} from '../../services/api/api.service';
import {FormClientComponent} from './formClient.component';

import {ClientClass} from '../../class/client.class';

@Component({
    providers: [ClientService, ApiService, FormClientComponent],
    templateUrl: './app/components/client/client.component.html',
    directives: [FormClientComponent]
})

export class ClientComponent implements OnInit {

    public clients: Client[];
    public errorMessage: string;

    constructor(private clientService: ClientService, private formClientComponent: FormClientComponent) {}

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

    public deleteClientAction(client: Client): void {
        this.clientService.deleteClient(client)
            .subscribe(
                // Update client list
                clients => this.getClients(),
                error =>  this.errorMessage = <any>error
            );

    }
}
