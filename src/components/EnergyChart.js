import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const EnergyChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        data: data.map(entry => entry.consumption),
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
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
