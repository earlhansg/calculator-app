import React, { useState } from "react";
import style from "./shared/device.module.css";
import { DeviceHeader } from "./DeviceHeader";
import { DeviceBody } from "./DeviceBody";

export const Device = () => {
  const [operators, setOperators] = useState([]);
  const [solution, setSolution] = useState([0]);
  return (
    <div className={style.container}>
      <div className={style.upperbar}>
        <span></span>
      </div>
      <DeviceHeader
        operators={operators}
        setOperators={setOperators}
        solution={solution}
        setSolution={setSolution}
      />
      <DeviceBody
        operators={operators}
        setOperators={setOperators}
        solution={solution}
        setSolution={setSolution}
      />
    </div>
  );
};
