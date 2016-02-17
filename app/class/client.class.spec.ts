import {describe, expect, it} from 'angular2/testing';
import {ClientClass} from './client.class';

describe('1st tests', () => {

    let client = new ClientClass('John', 'Smith', 'foo@bar.io');

    it('FirstName should be set', () => {
        expect(client.firstName).toHaveText('John')
    });

    it('LastName should be set', () => {
        expect(client.lastName).toHaveText('Smith')
    });

    it('Email should be set', () => {
        expect(client.email).toHaveText('foo@bar.io')
    });
});
