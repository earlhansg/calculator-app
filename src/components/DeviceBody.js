import React from "react";
import style from "./shared/device.module.css";
import PrimaryContent from "./shared/PrimaryContent";
import SecondaryContent from "./shared/SecondaryContent";
import { buttons } from "./shared/Device.data";

export const DeviceBody = ({calculations, setCalculations}) => {
  const filterPrimaryButtons = buttons
    .filter(({ type }) => type === "primaryContent")
    .map((filtered, i) => <PrimaryContent key={i} props={filtered} calculations={calculations} setCalculations={setCalculations}/>);
  const secondaryPrimaryButtons = buttons
    .filter(({ type }) => type === "secondaryContent")
    .map((filtered, i) => <SecondaryContent key={i} props={filtered} />);

  return (
    <div className={style.body}>
      <div className={style.bodyContent}>
        <div className={style.primaryContent}>{filterPrimaryButtons}</div>
        <div className={style.secondaryContent}>{secondaryPrimaryButtons}</div>
      </div>
    </div>
  );
};
