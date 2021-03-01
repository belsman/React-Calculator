import calculate from '../logic/calculate';

describe('Test calculate() method', () => {
  test('first digit button should set the total property', () => {
    const calcData = { total: null, next: null, operation: null };
    const result = calculate(calcData, '9');
    expect(result.total).toBe('9');
  });

  test('second digit button should concatenate with the total property', () => {
    const calcData = { total: null, next: null, operation: null };
    const result = calculate(calcData, '9');
    const result2 = calculate(result, '9');
    expect(result2.total).toBe('99');
  });

  test('an arithmetic operator set the operation property', () => {
    const calcData = { total: '99', next: null, operation: null };
    const result = calculate(calcData, '÷');
    expect(result.operation).toBe('÷');
  });

  test('a digit after an arithmetic operator sets the next property', () => {
    const calcData = { total: '99', next: null, operation: null };
    const operate = calculate(calcData, '÷');
    const result = calculate(operate, '9');
    const result2 = calculate(result, '9');
    expect(result2.next).toBe('99');
  });

  test('a result is return when "=" is passed as operation', () => {
    const calcData = { total: '99', next: '99', operation: '-' };
    const operate = calculate(calcData, '=');
    expect(operate.total).toBe('0');
  });

  test('properties of calcData becomes null if buttonName is AC', () => {
    const calcData = { total: '99', next: '99', operation: 'x' };
    const operate = calculate(calcData, 'AC');
    expect(operate.total).toBeNull();
  });

  test('total returns a percentage of total if buttonName is %', () => {
    const calcData = { total: '99', next: null, operation: null };
    const operate = calculate(calcData, '%');
    expect(operate.total).toBe('0.99');
  });

  test('negative next returns a positive value if buttonName is +/-', () => {
    const calcData = { total: '99', next: '-6', operation: '-' };
    const operate = calculate(calcData, '+/-');
    expect(operate.next).toBe('6');
  });
});
