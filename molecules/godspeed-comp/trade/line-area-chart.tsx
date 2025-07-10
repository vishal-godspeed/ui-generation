import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const LineAreaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = (chartRef.current as HTMLCanvasElement).getContext('2d');
    const labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'AAPL',
          data: labels.map(() => Math.round(Math.random() * 50 + 150)),
          fill: true,
          backgroundColor: 'rgba(59, 130, 246, 0.1)', // blue-500/10
          borderColor: '#3b82f6', // blue-500
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    };

    const chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#64748b' },
          },
          y: {
            grid: { color: '#e5e7eb' },
            ticks: { color: '#64748b' },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <section className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500 dark:text-blue-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 17l6-6 4 4 8-8"
            />
          </svg>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Price Trend
          </h3>
        </div>
        <div className="flex space-x-1">
          <button className="px-3 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-blue-100 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
            1D
          </button>
          <button className="px-3 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-blue-100 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
            1W
          </button>
          <button className="px-3 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-blue-100 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
            1M
          </button>
          <button className="px-3 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-blue-100 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
            1Y
          </button>
        </div>
      </div>
      <div className="h-64 w-full flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-xl border border-dashed border-gray-200 dark:border-gray-600 transition-colors duration-300">
        <canvas id="lineAreaChart" ref={chartRef} className="w-full h-full"></canvas>
      </div>
    </section>
  );
};

export default LineAreaChart;