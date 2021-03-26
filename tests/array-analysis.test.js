import { expect, test } from '@jest/globals';
import analize from '../src/array-analysis';

test('Takes array of number and returns object with desired properties', () => {
  expect(analize([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});