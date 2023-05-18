import React from "react";
import style from "./shared/device.module.css";

export const DeviceHeader = ({ calculatorState }) => {
  return (
    <div className={style.header}>
      <div className={style.numberContainer}>
        <div className={style.inputs}>
          <span>{calculatorState.opt}</span>
        </div>
        <div className={style.totals}>
          <span>{calculatorState.sol}</span>
        </div>
      </div>
    </div>
  );
};
