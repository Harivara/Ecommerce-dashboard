// export default ActivityChart;
  import React from 'react';
  import { Bar } from 'react-chartjs-2';
  import 'chart.js/auto';
  import { FaChevronDown } from 'react-icons/fa';
  import './ActivityChart.css';

  const ActivityChart = () => {
  
    const labels = Array.from({ length: 15 }, (_, i) => `Day ${i + 1}`);
    
    const data = Array.from({ length: 15 }, () => Math.floor(Math.random() * 15000));
    
    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Activity',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          borderRadius: 10, 
          barThickness: 17, 
          categoryPercentage: 0.4,
          barPercentage: 0.9, 
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false, 
      plugins: {
          legend: {
              position: 'top',
          },
          tooltip: {
              callbacks: {
                  label: function(context) {
                      let label = context.dataset.label || '';
                      if (label) {
                          label += ': ';
                      }
                      if (context.parsed.y !== null) {
                          label += context.parsed.y.toLocaleString();
                      }
                      return label;
                  },
              },
          },
      },
      scales: {
          x: {
              ticks: {
                  autoSkip: true,
                  maxRotation: 0, 
                  minRotation: 0,
              },
          },
          y: {
              min: 0,
              max: 15000,
              ticks: {
                  stepSize: 5000,
                  callback: function(value) {
                      if (value === 0) return '0';
                      return `${value / 1000}k`;
                  },
              },
          },
      },
  };
  
    return (
      <div className="activity-chart-container">
        <div className="chart-header">
          <h3>Activity</h3>
          <button className="transparent-button">
            Weekly <FaChevronDown />
          </button>
        </div>
        <div className="chart-body">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    );
  };

  export default ActivityChart;

