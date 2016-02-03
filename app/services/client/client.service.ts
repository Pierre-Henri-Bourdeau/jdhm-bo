import {CLIENTS} from './mock-clients';
import {Injectable} from 'angular2/core';

@Injectable()

export class ClientService {
    getClients() {
        return Promise.resolve(CLIENTS);
    }
}
