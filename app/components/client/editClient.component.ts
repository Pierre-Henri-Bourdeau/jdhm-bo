import {Component, View} from 'angular2/core';
import {Client} from '../../interfaces/client.interface';

@Component({
    selector: 'jdmh-edit-client',
    inputs: ['client']
})
@View({
    templateUrl: './app/components/client/editClient.component.html',
})

export class EditClient {

    public client: Client;
}
