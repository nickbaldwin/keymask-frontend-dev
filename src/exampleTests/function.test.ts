
import {expect, jest, test} from '@jest/globals';
import  {add} from './function';
import testModule from "./testModule";

describe('basic test suite', () => {

    test('adds 2 and 2', () => {
    const total = add(2,2);
        expect(total).toEqual(4);
        expect(total).not.toBeNull();
    });

});