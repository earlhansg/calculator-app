import React from "react";
import style from "./shared/device.module.css";

export const DeviceHeader = ({ operators, setOperators, solution }) => {
  return (
    <div className={style.header}>
      <div className={style.numberContainer}>
        <div className={style.inputs}>
          <span>{operators}</span>
        </div>
        <div className={style.totals}>
          <span>{solution}</span>
        </div>
      </div>
    </div>
  );
};
