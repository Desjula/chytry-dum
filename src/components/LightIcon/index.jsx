import React from "react";
import LightOn from "./../../images/light-on.svg";
import LightOff from "./../../images/light-off.svg";

const LightIcon = ({ on }) => {
  return on ? (
    <img src={LightOn} alt="svítící žárovka" />
  ) : (
    <img src={LightOff} alt="zhasnutá žárovka" />
  );
};

export default LightIcon;
