import React, { useState } from "react";
import "./style.css";
import LightIcon from "../LightIcon";

const Light = ({ name, state }) => {
  const [sviti, setSviti] = useState(state);

  const handleClick = () => {
    setSviti((prevState) => (prevState === "on" ? "off" : "on"));
  };

  return (
    <div className="light" onClick={handleClick}>
      <div className="light__icon">
        <LightIcon on={sviti === "on"} />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};

export default Light;
