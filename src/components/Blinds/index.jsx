import React, { useState } from "react";
import "./style.css";
import BlindsIcon from "../BlindsIcon";

const Blinds = ({ state }) => {
  const [status, setStatus] = useState(state);

  const trida = (open) => {
    return open ? "button button--active" : "button";
  };

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <BlindsIcon open={status === "open"} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__control">
        <button
          className={trida(status === "open")}
          onClick={() => setStatus("open")}
        >
          Otevřeno
        </button>
        <button
          className={trida(status === "closed")}
          onClick={() => setStatus("closed")}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
