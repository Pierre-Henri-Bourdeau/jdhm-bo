

import {ClientService} from './client.service';

describe('Client Service', () => {

  it('has name given in the constructor', () => {
    let clientService = new ClientService(1, 'Super Cat');
    expect(clientService.name).toEqual('Super Cat');
  });

  it('has id given in the constructor', () => {
    let clientService = new ClientService(1, 'Super Cat');
    expect(clientService.id).toEqual(1);
  });

})
