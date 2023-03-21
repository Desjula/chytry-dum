import React from "react";
import "./style.css";
import Elektrina from "./../../images/electricity.svg";
import Voda from "./../../images/water.svg";

const Energy = ({ electricity, water }) => {
  return (
    <div className="energy">
      <div className="energy__source">
        <div className="energy__icon">
          <img src={Elektrina} alt="elektřina" />
        </div>
        <div className="energy__consumption">
          <div className="energy__description">Elektřina</div>
          <div className="energy__value">{electricity}</div>
        </div>
      </div>
      <div className="energy__source">
        <div className="energy__icon">
          <img src={Voda} alt="voda" />
        </div>
        <div className="energy__consuption">
          <div className="energy__description">Voda</div>
          <div className="energy__value">
            {water}
            <sup>3</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energy;
