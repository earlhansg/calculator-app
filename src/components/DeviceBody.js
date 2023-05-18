import React from "react";
import style from "./shared/device.module.css";
import PrimaryContent from "./shared/PrimaryContent";
import SecondaryContent from "./shared/SecondaryContent";
import { buttons } from "./shared/Device.data";

export const DeviceBody = ({ calculatorState, setCalculatorState }) => {
  const filterPrimaryButtons = buttons
    .filter(({ type }) => type === "primaryContent")
    .map((filtered, i) => (
      <PrimaryContent
        key={i}
        props={filtered}
        setCalculatorState={setCalculatorState}
      />
    ));
  const secondaryPrimaryButtons = buttons
    .filter(({ type }) => type === "secondaryContent")
    .map((filtered, i) => (
      <SecondaryContent
        key={i}
        props={filtered}
        calculatorState={calculatorState}
        setCalculatorState={setCalculatorState}
      />
    ));

  return (
    <div className={style.body}>
      <div className={style.bodyContent}>
        <div className={style.primaryContent}>{filterPrimaryButtons}</div>
        <div className={style.secondaryContent}>{secondaryPrimaryButtons}</div>
      </div>
    </div>
  );
};
