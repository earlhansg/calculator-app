import React from "react";

const SecondaryContent = ({ props, calculations, setCalculations }) => {
  const handleClick = ({content}) => {
    const checkLastValue = operators.includes(calculations.slice(-1)[0]);
    // const stringToInt = operators.includes(content) && checkLastValue ? [] : operators.includes(content) ? content : parseInt(content);
    const stringToInt = checkLastValue ? [] : content;
    setCalculations([...calculations, ...stringToInt]);
    // console.log('checking', calculations);
  }
  const operators = ['+', '*', '-', '/', '='];

  return (
    <>
      <span onClick={() => handleClick(props)}>{props.content}</span>
    </>
  );
};

export default SecondaryContent;
