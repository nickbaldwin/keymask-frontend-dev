import {expect, test} from '@jest/globals';


test('passing test', () => {
  expect(3).toEqual(3);
});

test('failing test', () => {
  expect(3).toEqual(4);
});