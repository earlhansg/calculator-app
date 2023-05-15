import React from "react";

const SecondaryContent = ({
  props,
  operators,
  setOperators,
  solution,
  setSolution,
}) => {
  const handleClick = ({ content }) => {
    const checkLastValue = typeOfOperators.includes(operators.slice(-1)[0]);
    if (content === "=") {
      const result = performMDAS(operators.join(" "));
      setSolution([(solution[0] = result)]);
      setOperators([]);
    } else {
      const stringToInt = checkLastValue ? [] : content;
      setOperators([...operators, ...stringToInt]);
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
