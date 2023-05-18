import React from "react";

const PrimaryContent = ({ props, setCalculatorState }) => {
  const handleClick = ({ content }) => {
    if (content === "AC") {
      setCalculatorState((prev) => ({ ...prev, opt: [] }));
    } else {
      setCalculatorState((prev) => ({ ...prev, opt: [...prev.opt, content] }));
    }
  };
  const buttonStyle = () => {
    if (props.exclusiveCss === null) {
      return (
        <span style={{ cursor: "pointer" }} onClick={() => handleClick(props)}>
          {props.content}
        </span>
      );
    } else if (props.exclusiveCss === "specialCharacter") {
      return (
        <span
          onClick={() => handleClick(props)}
          style={{
            height: "25px",
            lineHeight: "25px",
            width: "25px",
            borderRadius: "25px",
            color: "#dadada",
            textAlign: "center",
            cursor: "pointer",
            border: "1px solid #9f9f9f",
            flexGrow: "0.7",
            padding: "5px 0",
            marginRight: "5px",
          }}
        >
          {props.content}
        </span>
      );
    } else {
      return (
        <span
          onClick={() => handleClick(props)}
          style={{
            flexBasis: "34%",
            color: "#9f9f9f",
            fontSize: "2em",
            display: "flex",
            justifyContent: "center",
            marginRight: "26px",
            cursor: "pointer",
          }}
        >
          {props.content}
        </span>
      );
    }
  };
  return <>{buttonStyle()}</>;
};

export default PrimaryContent;
