import React from "react";
import "./style.css"
import Light from "../Light";

const Lights = ({ lights }) => {
  return (
    <>
      {lights.map(({ name, state }) => (
        <Light key={name} name={name} state={state} />
      ))}
    </>
  );
};

export default Lights;