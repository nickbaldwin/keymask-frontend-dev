/** @jest-environment node */


import {expect, jest, test} from '@jest/globals';
import  testModule from './testModule';

// if just want to mock, and define mockImp or mockValue in each function, just use:
// jest.mock('./testModule');

// else, for default mockImpl:

jest.mock('./testModule', () => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...(jest.requireActual('./testModule')),
    getWinner: jest.fn(() => 'M')
    // getWinner: getWinner
}));


/*
  alternatively:
    const mock = jest.mock('./testModule', () => ({
      __esModule: true,
      default: {
        getWinner: jest.fn(() => 'mock')
      }
    }));
 */


// this allows us to override the mockImpl
// const mocked = testModule as jest.Mocked<typeof testModule>;


const mocked = testModule as jest.MockedObject<typeof testModule>;

afterEach(() => {
    mocked.getWinner.mockClear();
    // clears calls b/w tests too
});

const game = () => {
    const playerA = 'A';
    const playerB = 'B';
    return testModule.getWinner(playerA, playerB);
};


describe('mock test suite', () => {

    test('instead of B, default mock should return M', () => {
        const winner = game();
        expect(winner).toEqual('M');
        expect(testModule.getWinner).toBeCalledWith('A', 'B');
        expect(mocked.getWinner.mock.calls).toEqual([
            ['A', 'B']
        ]);
    });

    test('with override, mock should now return X instead of M', () => {
        mocked.getWinner.mockImplementationOnce(() =>  'X');
        const winner = game();
        expect(winner).toEqual('X');
    });


    test('with 2 games, mock called twice', () => {
        game();
        game();
        expect(mocked.getWinner.mock.calls).toEqual([
            ['A', 'B'],
            ['A', 'B']
        ]);
    });


    test('with no override, mock should again return M', () => {
    // mock is cleared after each test, via afterEach()
        const realWinner = game();
        expect(realWinner).toEqual('M');
    });



});

