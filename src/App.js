import React, { useState } from 'react';
import EnergyChart from './components/EnergyChart';
import EnergyTips from './components/EnergyTips';
import { energyData } from './data';

function App() {
  const [data, setData] = useState(energyData);

  return (
    <div className="App">
      <h1>Energy Tracker</h1>
      <EnergyChart data={data} />
      <EnergyTips data={data} />
    </div>
  );
}

export default App;
