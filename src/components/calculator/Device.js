import React from "react";
import style from "./device.module.css";
import { DeviceHeader } from "./DeviceHeader";
import { DeviceBody } from "./DeviceBody";

export const Device = () => {
  return (
    <div className={style.container}>
      <DeviceHeader />
      <DeviceBody />
    </div>
  );
};
