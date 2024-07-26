import React from 'react';

const getEnergyTips = (consumption) => {
  if (consumption > 1000) {
    return "Réduisez l'utilisation des appareils électriques pendant les heures de pointe.";
  } else {
    return "Bonne gestion de l'énergie!";
  }
};

const EnergyTips = ({ data }) => {
  const latestConsumption = data[data.length - 1].consumption;

  return (
    <div className="tips-container">
      <h2>Energy Tips</h2>
      <p>{getEnergyTips(latestConsumption)}</p>
    </div>
  );
};

export default EnergyTips;
