import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  try {
    const bigNumberOne = new Big(numberOne);
    const bigNumberTwo = new Big(numberTwo);

    if (operation === '+') {
      result = bigNumberOne.plus(bigNumberTwo);
    } else if (operation === '-') {
      result = bigNumberOne.minus(bigNumberTwo);
    } else if (operation === 'x') {
      result = bigNumberOne.times(bigNumberTwo);
    } else if (operation === '÷') {
      if (numberTwo === 0) return NaN;
      result = bigNumberOne.div(bigNumberTwo);
    } else {
      result = NaN;
    }
  } catch (e) {
    result = '';
  }

  return result.toString();
};

export default operate;
