// src/components/AreaChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const data = {
  labels: [7, 8, 9, 10, 11, 12, 13],
  datasets: [
    {
      label: '전체 언급량',
      data: [10, 15, 13, 25, 40, 25, 20],
      fill: true,
      backgroundColor: 'rgba(186, 104, 200, 0.4)',
      borderColor: 'rgba(186, 104, 200, 1)',
      tension: 0.4,
    },
    {
      label: '부정 언급량',
      data: [5, 7, 6, 10, 15, 10, 8],
      fill: true,
      backgroundColor: 'rgba(123, 31, 162, 0.5)',
      borderColor: 'rgba(123, 31, 162, 1)',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: function (ctx) {
          return `${ctx.dataset.label}: ${ctx.raw}`;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#444' },
    },
    y: {
      ticks: { color: '#444' },
      beginAtZero: true,
    },
  },
};

const AreaChart = () => (
  <div className="bg-white rounded p-4 shadow my-4">
    <h5 className="fw-bold mb-3">시간대별 언급량 추이</h5>
    <Line data={data} options={options} />
  </div>
);

export default AreaChart;
