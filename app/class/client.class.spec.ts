import {ClientClass} from './client.class';

describe('Testing Client Class', () => {

    let client = new ClientClass('John', 'Smith', 'foo@bar.io');

    it('FirstName should be set', () => {
        expect(client.firstName).toEqual('John')
    });

    it('LastName should be set', () => {
        expect(client.lastName).toEqual('Smith')
    });

    it('Email should be set', () => {
        expect(client.email).toEqual('foo@bar.io')
    });
});
