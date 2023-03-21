import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import House from "./images/house.jpg"
import Header from "./components/Header"
import Dashboard from './components/Dashboard';
import smartHomeData from './smartHomeData';
import Light from './components/Light';

const App = () => (
  <div className="container">
    <Header title={"Chytrý dům"} />
    <Dashboard data={smartHomeData} lights={smartHomeData.lights} />
  </div>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);