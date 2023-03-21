import React from "react";
import "./style.css";
import Light from "../Light";
import Climate from "../Climate";
import Blinds from "../Blinds";
import Energy from "../Energy";

const Dashboard = ({ data }) => {
  const { lights, climate, energyConsumption, blinds } = data;
  const { temperature, humidity } = climate;
  const { electricity, water } = energyConsumption;

  const Lights = ({ lights }) => {
    return (
      <>
        {lights.map(({ name, state }) => (
          <Light key={name} name={name} state={state} />
        ))}
      </>
    );
  };

  return (
    <main className="dashboard">
      <div className="lights">
        <Lights lights={lights} />
      </div>
      <Climate temperature={temperature} humidity={humidity} />
      <Blinds state={blinds} />
      <Energy electricity={electricity} water={water} />
    </main>
  );
};

export default Dashboard;
