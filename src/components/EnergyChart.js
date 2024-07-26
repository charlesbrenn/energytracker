import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const EnergyChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [
      {
        label: 'Consommation d\'énergie (kWh)',
        data: data.map(entry => entry.consumption),
        borderColor: 'rgba(0, 166, 84, 0.8)',
        backgroundColor: 'rgba(0, 166, 84, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={chartData} />
    </div>
  );
};

export default EnergyChart;
