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
          <img src="/logo.png" alt="Logo du Suivi de Consommation" className="logo" />
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À Propos</Link></li>
            <li><Link to="/energy">Suivi de Consommation</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/energy" element={
            <>
              <h1>Suivi de Consommation</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Date :
                  <input 
                    type="date" 
                    value={newDate} 
                    onChange={(e) => setNewDate(e.target.value)} 
                  />
                </label>
                <label>
                  Consommation (kWh) :
                  <input 
                    type="number" 
                    step="0.01" 
                    value={newConsumption} 
                    onChange={(e) => setNewConsumption(e.target.value)} 
                  />
                </label>
                <button type="submit">Ajouter Données</button>
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
