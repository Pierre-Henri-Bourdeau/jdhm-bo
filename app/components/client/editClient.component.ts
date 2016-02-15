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

    constructor(public clientService: ClientService) {}

    public client = new ClientClass('', '', '', '');
    // Just for template view
    public isClientCreation: boolean = false;
    public errorMessage: string;

    /*
    * Update an already existing client
    */
    editClientAction(client: ClientClass) {
        this.isClientCreation = false;
        this.client = client;
    }

    /*
    * Create a new client
    */
    createClientAction(): void {
        this.isClientCreation = true;
        this.client =  new ClientClass('', '', '', '');
    }

    updateClient(client: Client) {

        if (this.isClientCreation) {
            var data = this.clientService.createClient(client);
        } else {
            var data = this.clientService.updateClient(client);
        }

        data.subscribe(
            client => //@todo call ClientComponent.getGlients(),
            error =>  this.errorMessage = <any>error
        );

    }

}
