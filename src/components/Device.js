import React from "react";
import style from "./shared/device.module.css";
import { DeviceHeader } from "./DeviceHeader";
import { DeviceBody } from "./DeviceBody";

export const Device = () => {
  return (
    <div className={style.container}>
      <div className={style.upperbar}>
        <span></span>
      </div>
      <DeviceHeader />
      <DeviceBody />
    </div>
  );
};
