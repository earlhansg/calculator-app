import React from "react";

const PrimaryContent = ({ props }) => {
  const buttonStyle = () => {
    if (props.exclusiveCss === null) {
      return <span>{props.content}</span>;
    } else if (props.exclusiveCss === "specialCharacter") {
      return (
        <span
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
          style={{
            flexBasis: "34%",
            color: "#9f9f9f",
            fontSize: "2em",
            display: "flex",
            justifyContent: "center",
            marginRight: "26px",
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
