import React from "react";
import style from "./device.module.css";

export const DeviceHeader = () => {
  return (
    <div className={style.header}>
      <div className={style.numberContainer}>
        <div className={style.inputs}>
          <span>12</span>
          <span>-</span>
          <span>4</span>
          <span>+</span>
          <span>4</span>
        </div>
        <div className={style.totals}>
          <span>78.58</span>
        </div>
      </div>
    </div>
  );
};
