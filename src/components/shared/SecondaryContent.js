import React from "react";

const SecondaryContent = ({ props, calculatorState, setCalculatorState }) => {
  const handleClick = ({ content }) => {
    const checkLastValue = typeOfOperators.includes(
      calculatorState.opt.slice(-1)[0]
    );
    const stringToInt = checkLastValue ? [] : content;
    if (content === "=") {
      const result = performMDAS(calculatorState.opt.join(" "));
      const checkResult = isNaN(result) ? 0 : result;
      setCalculatorState((prev) => ({
        ...prev,
        sol: checkResult,
        opt: [],
        clickEquals: true,
      }));
    } else if (calculatorState.opt.length === 0) {
      setCalculatorState((prev) => ({
        ...prev,
        opt: [...prev.opt, prev.sol, stringToInt],
      }));
    } else {
      setCalculatorState((prev) => ({
        ...prev,
        opt: [...prev.opt, ...stringToInt],
      }));
    }
  };

  const typeOfOperators = ["+", "*", "-", "/", "="];

  function performMDAS(expression) {
    // Remove any white spaces from the expression
    expression = expression.replace(/\s/g, "");

    // Perform multiplication and division operations
    while (expression.includes("*") || expression.includes("/")) {
      expression = expression.replace(
        /(-?\d+\.?\d*)([*/])(-?\d+\.?\d*)/,
        function (match, num1, operator, num2) {
          if (operator === "*") {
            return parseFloat(num1) * parseFloat(num2);
          } else if (operator === "/") {
            return parseFloat(num1) / parseFloat(num2);
          }
        }
      );
    }

    // Perform addition and subtraction operations
    while (expression.includes("+") || expression.includes("-")) {
      // eslint-disable-next-line
      expression = expression.replace(
        /(-?\d+\.?\d*)([+\-])(-?\d+\.?\d*)/,
        function (match, num1, operator, num2) {
          if (operator === "+") {
            return parseFloat(num1) + parseFloat(num2);
          } else if (operator === "-") {
            return parseFloat(num1) - parseFloat(num2);
          }
        }
      );
    }

    // Return the final result
    return parseFloat(expression);
  }

  return (
    <>
      <span onClick={() => handleClick(props)}>{props.content}</span>
    </>
  );
};

export default SecondaryContent;
