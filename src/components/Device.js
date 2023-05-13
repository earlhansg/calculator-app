import React, { useState } from "react";
import style from "./shared/device.module.css";
import { DeviceHeader } from "./DeviceHeader";
import { DeviceBody } from "./DeviceBody";

export const Device = () => {
  const [calculations, setCalculations] = useState([]);
  return (
    <div className={style.container}>
      <div className={style.upperbar}>
        <span></span>
      </div>
      <DeviceHeader calculations={calculations} setCalculations={setCalculations} />
      <DeviceBody calculations={calculations} setCalculations={setCalculations}/>
    </div>
  );
};
