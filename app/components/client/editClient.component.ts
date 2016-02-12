import {Component, View} from 'angular2/core';
import {Client} from '../../interfaces/client.interface';
import {ClientClass} from '../../class/client.class';
import {ClientService} from '../../services/client/client.service';


@Component({
    selector: 'jdmh-edit-client',
    inputs: ['client']
})
@View({
    templateUrl: './app/components/client/editClient.component.html',
})

export class EditClientComponent {

    constructor(public clientService: ClientService) {
    }

    public client: Client;
    public errorMessage: string;

    updateClient(client: Client) {
        this.clientService.updateClient(client)
            .subscribe(
                client => client,
                error =>  this.errorMessage = <any>error
            );
    }

    createClient(client) {
        this.clientService.createClient(client);
    }

}
