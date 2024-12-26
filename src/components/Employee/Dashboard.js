import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from "chart.js";

// Registering the necessary chart components including PointElement
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalWasteProcessed: 0,
    totalWasteRemaining: 0,
    totalCyclesCompleted: 0,
    availableProducts: 0,
    wasteIntakeData: [],
  });

  useEffect(() => {
    // Dummy data to simulate the fetch from an API
    const fetchData = () => {
      const data = {
        totalWasteProcessed: 1200,
        totalWasteRemaining: 300,
        totalCyclesCompleted: 15,
        availableProducts: 500,
        wasteIntakeData: [
          { date: "2024-01-01", volume: 100 },
          { date: "2024-01-02", volume: 150 },
          { date: "2024-01-03", volume: 200 },
          { date: "2024-01-04", volume: 180 },
          { date: "2024-01-05", volume: 210 },
          { date: "2024-01-06", volume: 250 },
        ],
      };
      setMetrics(data);
    };
    fetchData();
  }, []);

  const chartData = {
    labels: metrics.wasteIntakeData.map(item => item.date),
    datasets: [
      {
        label: "Waste Intake Over Time",
        data: metrics.wasteIntakeData.map(item => item.volume),
        borderColor: "#4CAF50", // Professional green
        backgroundColor: "rgba(76, 175, 80, 0.2)", // Light green for fill
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="container">
        <div className="row">
    <div className="dashboard-container">
      <h1 className="dashboard-title">Waste Processing Dashboard</h1>

      <div className="dashboard-metrics">
        <div className="metric-card">
          <h2>Total Waste Processed</h2>
          <p>{metrics.totalWasteProcessed} tons</p>
        </div>
        <div className="metric-card">
          <h2>Total Waste Remaining</h2>
          <p>{metrics.totalWasteRemaining} tons</p>
        </div>
        <div className="metric-card">
          <h2>Completed Processing Cycles</h2>
          <p>{metrics.totalCyclesCompleted}</p>
        </div>
        <div className="metric-card">
          <h2>Available Products</h2>
          <p>{metrics.availableProducts} units</p>
        </div>
      </div>

      <div className="metrics-visualization">
        <h2 className="chart-title">Waste Intake Over Time</h2>
        <Line data={chartData} options={{
          responsive: true,
          plugins: {
            tooltip: {
              mode: "index",
              intersect: false,
            },
            legend: {
              display: true,
              position: 'top',
            },
          },
          scales: {
            x: {
              type: "category", // Make sure the x-axis uses the category scale
              title: {
                display: true,
                text: "Date"
              },
            },
            y: {
              title: {
                display: true,
                text: "Waste Volume (tons)"
              },
              beginAtZero: true,
            },
          },
        }} />
      </div>

    </div>
    </div>
    </div>
  );
};

export default Dashboard;
