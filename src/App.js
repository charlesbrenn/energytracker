import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EnergyChart from './components/EnergyChart';
import EnergyTips from './components/EnergyTips';
import Home from './components/Home';
import About from './components/About';
import { energyData as initialEnergyData } from './data';
import './styles.css';

function App() {
  const [data, setData] = useState(initialEnergyData);
  const [newDate, setNewDate] = useState('');
  const [newConsumption, setNewConsumption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newDate && newConsumption) {
      const newEntry = { date: newDate, consumption: parseFloat(newConsumption) };
      setData([...data, newEntry]);
      setNewDate('');
      setNewConsumption('');
    }
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/energy">Energy Tracker</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/energy" element={
            <>
              <h1>Energy Tracker</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Date:
                  <input 
                    type="date" 
                    value={newDate} 
                    onChange={(e) => setNewDate(e.target.value)} 
                  />
                </label>
                <label>
                  Consumption (kWh):
                  <input 
                    type="number" 
                    step="0.01" 
                    value={newConsumption} 
                    onChange={(e) => setNewConsumption(e.target.value)} 
                  />
                </label>
                <button type="submit">Add Data</button>
              </form>
              <EnergyChart data={data} />
              <EnergyTips data={data} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
