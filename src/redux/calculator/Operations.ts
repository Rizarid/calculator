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

export const round = (value: number, maximumCharacters: number): string => {
  const stringValue = value.toString();
  if (stringValue.length <= maximumCharacters) return stringValue;

  const excess = stringValue.length - maximumCharacters;
  const numberOfChar = maximumCharacters - 4 - excess.toString().length;

  return value.toExponential(numberOfChar);
};
