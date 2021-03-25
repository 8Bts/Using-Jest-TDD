import { expect, test } from '@jest/globals';
import calculator from '../src/calculator';

test('adds 1 + 2 + 3 to equal 6', () => {
  expect(calculator.add(1, 2, 3)).toBe(6);
});

test('subtracts 1 - 2 to equal -1', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('multiplies 2 * 4 * (-3) to equal -24', () => {
  expect(calculator.multiply(2, 4, -3)).toBe(-24);
});

test('divides 20 / -3 to equal -6', () => {
  expect(calculator.divide(20, -3)).toBe(-7);
});