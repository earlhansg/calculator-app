import React, { useState } from "react";
import style from "./shared/device.module.css";
import { DeviceHeader } from "./DeviceHeader";
import { DeviceBody } from "./DeviceBody";

export const Device = () => {
  const [calculatorState, setCalculatorState] = useState({
    opt: [],
    sol: 0,
    clickEquals: false
  });
  return (
    <div className={style.container}>
      <div className={style.upperbar}>
        <span></span>
      </div>
      <DeviceHeader calculatorState={calculatorState} />
      <DeviceBody
        calculatorState={calculatorState}
        setCalculatorState={setCalculatorState}
      />
    </div>
  );
};
