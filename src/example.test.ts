/** @jest-environment node */
import {expect, jest, test} from '@jest/globals';

import testModule from './testModule';

jest.mock('./testModule', () => ({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  ...(jest.requireActual('./testModule')),
  getWinner: jest.fn(() => 'mock')
}));


/*
  const mock = jest.mock('./testModule', () => ({
    __esModule: true,
    default: {
      getWinner: jest.fn(() => 'mock')
    }
  }));
 */


const game = () => {
  const playerA = "A";
  const playerB = "B";
  return testModule.getWinner(playerA, playerB);
}


describe('test suite', () => {

  beforeEach(function() {
    //
  });

  test('passing test', () => {
    expect(3).toEqual(3);
  });

  test('mock test, passes', () => {
    const winner = game()
    expect(winner).toEqual('mock')
    expect(testModule.getWinner).toBeCalledWith('A', 'B');
  });

  // todo - reset mock
  test('use real fn, fails :-(', () => {
    const realWinner = game();
    expect(realWinner).toEqual('B');
  });

});

