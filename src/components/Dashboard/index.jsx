import React from "react";
import "./style.css";
import Lights from "../Lights";
import Climate from "../Climate";
import Blinds from "../Blinds";
import Energy from "../Energy";

const Dashboard = ({ data }) => {
  const { lights, climate, energyConsumption, blinds } = data;
  const { temperature, humidity } = climate;
  const { electricity, water } = energyConsumption;

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
