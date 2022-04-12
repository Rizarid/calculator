import Big from 'big.js';

const plus = (result: number, displayValue: string): number => (
  result + Number.parseFloat(displayValue)
);

const minus = (result: number, displayValue: string): number => (
  result - Number.parseFloat(displayValue)
);

const multiply = (result: number, displayValue: string): number => (
  result * Number.parseFloat(displayValue)
);

const div = (result: number, displayValue: string): number => (
  result / Number.parseFloat(displayValue)
);

export const OPERATIONS = new Map([
  ['', plus],
  ['+', plus],
  ['-', minus],
  ['x', multiply],
  ['/', div],
]);

const roundInteger = (value: number, maximumCharacters: number) => {
  const bigValue = BigInt(value);
  const stringValue = bigValue.toString();

  const charExcess = stringValue.length - maximumCharacters;
  const lengthOfSubstr = maximumCharacters - 2 - charExcess.toString().length;
  return `${stringValue.slice(0, lengthOfSubstr)}e+${charExcess + 2 + charExcess.toString().length}`;
};

export const round = (value: number, maximumCharacters: number): string => {
  const bigValue = Big(value);
  const stringValue = bigValue.toFixed();

  if (stringValue.length <= maximumCharacters) return stringValue;

  const dotIndex = stringValue.indexOf('.');

  if ((dotIndex !== -1) && (dotIndex <= maximumCharacters)) {
    const numberOfCharAfterDot = maximumCharacters - dotIndex - 1;
    return value.toFixed(numberOfCharAfterDot);
  }

  return roundInteger(value, maximumCharacters);
};
