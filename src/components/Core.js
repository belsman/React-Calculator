import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Core = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  };

  let { total } = calculatorData;
  const { next } = calculatorData;
  total = total || '0';

  return (
    <>
      <div className="calculator">
        <Display result={next || total} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default Core;
