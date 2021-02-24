import operate from './operate';

const calculate = (calcData, buttonName) => {
  const operationList = ['+', 'x', '-', '÷'];
  let { total, next, operation } = calcData;
  total = total || '';

  if (!operation && !next) {
    if (/\d/.test(buttonName)) {
      total += buttonName;
    }

    if (buttonName === '.') {
      if (total.indexOf(buttonName) === -1) {
        total += buttonName;
      }
    }

    if (buttonName === '+/-') {
      total = operate(total, 1, 'x');
    }

    if (buttonName === '%') {
      total = operate(total, 0.01, 'x');
    }
  }

  if (operationList.includes(buttonName)) {
    operation = buttonName;
  }

  if (total && operation) {
    next = next || '';
    if (/\d/.test(buttonName)) {
      next += buttonName;
    }

    if (buttonName === '.') {
      if (next.indexOf(buttonName) === -1) {
        next += buttonName;
      }
    }

    if (buttonName === '+/-') {
      next = operate(next, 1, 'x');
    }

    if (buttonName === '%') {
      next = operate(next, 0.01, 'x');
    }
  }

  if (buttonName === '=' && total && operation && next) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  }

  if (buttonName === 'AC') {
    total = '';
    next = null;
    operation = null;
  }

  return { total, next, operation };
};

export default calculate;
