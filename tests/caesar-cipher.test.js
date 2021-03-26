import { expect, test } from '@jest/globals';
import caesar from '../src/caesar-cipher';

test('wraps all characters with +1 offset', () => {
  expect(caesar('Secret agent\'s nickname is Zed')).toEqual('Tfdsfu bhfou\'t ojdlobnf jt Afe');
});