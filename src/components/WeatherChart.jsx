import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherCharts = ({ weatherData }) => {
  const tempTimeData = {
    labels: weatherData.map(item => item.day),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: weatherData.map(item => item.temperature),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const windPressureData = {
    labels: weatherData.map(item => item.day),
    datasets: [
      {
        label: 'Wind Speed (km/h)',
        data: weatherData.map(item => item.windSpeed),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Pressure (hPa)',
        data: weatherData.map(item => item.pressure),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const pressureHumidityData = {
    labels: weatherData.map(item => item.day),
    datasets: [
      {
        label: 'Pressure (hPa)',
        data: weatherData.map(item => item.pressure),
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Humidity (%)',
        data: weatherData.map(item => item.humidity),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#000000',
        },
      },
      title: {
        display: true,
        color: '#000000',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#000000',
        },
      },
      y: {
        ticks: {
          color: '#000000',
        },
      },
    },
  };

  return (
    <div className="space-y-8 max-w[83vw] min-h-[15vh]">
      <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
        <Line data={tempTimeData} options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Temperature vs. Time' } } }} />
      </div>
      <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
        <Line data={windPressureData} options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Wind Speed vs. Pressure' } } }} />
      </div>
      <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
        <Line data={pressureHumidityData} options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Pressure vs. Humidity' } } }} />
      </div>
      {/* Add another chart here if needed */}
    </div>
  );
};

export default WeatherCharts;
