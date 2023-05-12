import React from "react";
import style from './device.module.css'

export const DeviceBody = () => {
  return <div className={style.body}>

    <div className={style.bodyContent}>
      <div className={style.primaryContent}>
        <span>AC</span>
        <span>+/-</span>
        <span>%</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </div>
      <div className={style.secondaryContent}>
        <span>/</span>
        <span>*</span>
        <span>-</span>
        <span>+</span>
        <span>=</span>
      </div>
    </div>

  </div>;
};
