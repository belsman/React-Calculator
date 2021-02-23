import operate from './operate';

const calculate = (calcData, buttonName) => {
  const operationList = ['+', 'x', '-', '÷'];
  let { total, next, operator } = calcData;
  
  total = total || '';

  if (!operator && !next) {
    if (/\d/.test(buttonName)) {
      total += buttonName;
    }

    if (buttonName === '.') {
      if (total.indexOf(buttonName) === -1) {
        total += buttonName;
      }
    }

    if (buttonName === '+/-') {
      total = operate(total, 1, '-');
    }

    if (buttonName === '%') {
      total = operate(total, 0.01, 'x');
    }
  }

  if (operationList.includes(buttonName)) {
    operator = buttonName;
  }

  if (total && operator) {
    if (/\d/.test(buttonName)) {
      next += buttonName;
    }

    if (buttonName === '.') {
      if (next.indexOf(buttonName) === -1) {
        next += buttonName;
      }
    }

    if (buttonName === '+/-') {
      next = operate(next, 1, '-');
    }

    if (buttonName === '%') {
      next = operate(next, 0.01, 'x');
    }
  }

  if (total && operator && next) {
    total = operate(total, next, operator);
    next = '';
    operator = '';
  }

  if (buttonName === 'AC') {
    total = '0';
    next = 0;
    operator = 0;
  }

  return { total, next, operator };
};

export default calculate;
