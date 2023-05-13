import React from "react";
import style from "./device.module.css";
import PrimaryContent from "./PrimaryContent";
import { buttons } from "./Device.data";

export const DeviceBody = () => {
  const buttonList = buttons.map((button, i) => {
    return button.type === "primaryContent" ? (
      <PrimaryContent key={i} props={button} />
    ) : null;
  });

  return (
    <div className={style.body}>
      <div className={style.bodyContent}>
        <div className={style.primaryContent}>{buttonList}</div>
        <div className={style.secondaryContent}>
          <span>/</span>
          <span>*</span>
          <span>-</span>
          <span>+</span>
          <span>=</span>
        </div>
      </div>
    </div>
  );
};
