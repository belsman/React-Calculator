const calculate = (calcData, buttonName) => {
  const { total, next, operation } = calcData;
  if (buttonName === "+/-") {
    total *= -1;
    next *= -1;
  }
};

export default calculate;