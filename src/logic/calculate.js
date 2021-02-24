import operate from './operate';

const calculate = (calcData, buttonName) => {
<<<<<<< HEAD
  const operationList = ['+', '-', 'x', '÷'];
  let { total, next, operator } = calcData;
=======
  const operationList = ['+', 'x', '-', '÷'];
  let { total, next, operation } = calcData;
  total = total || '';
>>>>>>> fifth-milestone

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
<<<<<<< HEAD
      total = operate(total, 1, '-');
=======
      total = operate(total, -1, 'x');
>>>>>>> fifth-milestone
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
<<<<<<< HEAD
      next = operate(next, 1, '-');
=======
      next = operate(next, -1, 'x');
>>>>>>> fifth-milestone
    }

    if (buttonName === '%') {
      next = operate(next, 0.01, 'x');
    }
  }

<<<<<<< HEAD
  if (total && operator && next) {
    total = operate(total, next, operator);
    next = null;
    operator = null;
  }

  if (buttonName === 'AC') {
    total = '0';
    next = null;
    operator = null;
=======
  if (buttonName === '=' && total && operation && next) {
    total = operate(total, next, operation);
    next = null;
    operation = null;
  }

  if (buttonName === 'AC') {
    total = '';
    next = null;
    operation = null;
>>>>>>> fifth-milestone
  }

  return { total, next, operation };
};

export default calculate;
