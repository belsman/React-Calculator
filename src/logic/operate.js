import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
    let result;
    bigNumberOne = new Big(numberOne);
    bigNumberTwo = new Big(numberTwo);
    
    if (operation === "+") {
        result = bigNumberOne.plus(bigNumberTwo);
    } else if (operation === "-") {
        result = bigNumberOne.minus(bigNumberTwo);
    } else if (operation === "x") {
        result = bigNumberOne.times(bigNumberTwo);
    } else if (operation === "÷") {
        if (numberTwo === 0) return NaN;
        result = bigNumberOne.div(bigNumberTwo);
    } else {
        result = NaN;
    }

    return result.toString();
    
};

export default operate;
