import React, { useState } from "react";
import "./style.css";
import TemperaturePic from "./../../images/temp.svg";

const Climate = ({ temperature, humidity }) => {
  const [temrperature, setTemrperature] = useState(temperature);

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={TemperaturePic} alt="teploměr" />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{temrperature} °C</div>
        <div className="climate__humidity">Vlhkost vzduchu {humidity} %</div>
      </div>
      <div className="climate__controls">
        <button
          onClick={() => setTemrperature(temrperature + 1)}
          className="button"
        >
          +
        </button>
        <button
          onClick={() => setTemrperature(temrperature - 1)}
          className="button"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Climate;
