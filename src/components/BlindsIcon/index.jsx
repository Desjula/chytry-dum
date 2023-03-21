import React from "react";
import BlindsOpen from "./../../images/blinds-open.svg";
import BlindsClosed from "./../../images/blinds-closed.svg";
import "./style.css";

const BlindsIcon = ({ open }) => {
  return open ? (
    <img src={BlindsOpen} alt="Open Blinds" />
  ) : (
    <img src={BlindsClosed} alt="Closed Blinds" />
  );
};

export default BlindsIcon;
