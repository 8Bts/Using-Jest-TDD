import { expect, test } from '@jest/globals';
import mystring from '../src/mystring';

test('Returns capitalized string if first character is lowercase and alphabetic', () => {
  expect(mystring.capitalize('my first day at university')).toEqual('My first day at university');
});

test('Returns same string if first character is uppercase or non-alphabetic', () => {
  expect(mystring.capitalize('1. create repo')).toEqual('1. create repo');
});

test('Takes string and returns its reverse', () => {
  expect(mystring.reverseString('Happy birthday!')).toEqual('!yadhtrib yppaH');
});