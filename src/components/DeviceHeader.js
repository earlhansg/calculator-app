import React from "react";
import style from "./shared/device.module.css";

export const DeviceHeader = ({calculations, setCalculations}) => {
  return (
    <div className={style.header}>
      <div className={style.numberContainer}>
        <div className={style.inputs}>
          {/* <span>12</span>
          <span>-</span>
          <span>4</span>
          <span>+</span>
          <span>4</span> */}
          <span>{calculations}</span>
        </div>
        <div className={style.totals}>
          {/* <span>78.58</span> */}
          {3 + 4 * 2 - 6 / 3}
        </div>
      </div>
    </div>
  );
};
