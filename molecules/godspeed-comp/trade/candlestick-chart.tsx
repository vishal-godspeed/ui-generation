import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import 'chartjs-chart-financial';
import { enUS } from 'date-fns/locale';
import { format } from 'date-fns';

Chart.register(...registerables);

const CandlestickChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = (chartRef.current as HTMLCanvasElement).getContext('2d');

    // Generate random candlestick data
    function randomBar(date: Date) {
      const open = Math.random() * 100 + 100;
      const close = open + (Math.random() - 0.5) * 10;
      const high = Math.max(open, close) + Math.random() * 5;
      const low = Math.min(open, close) - Math.random() * 5;
      return {
        x: date,
        o: open,
        h: high,
        l: low,
        c: close,
      };
    }

    function getData(count: number) {
      const data = [];
      let date = new Date();
      for (let i = 0; i < count; i++) {
        data.unshift(randomBar(new Date(date)));
        date.setDate(date.getDate() - 1);
      }
      return data;
    }

    const data = {
      datasets: [
        {
          label: 'AAPL',
          data: getData(30),
          color: {
            up: '#22c55e', // green-500
            down: '#ef4444', // red-500
            unchanged: '#64748b', // slate-500
          },
          borderColor: '#64748b',
          borderWidth: 1,
        },
      ],
    };

    const chart = new Chart(ctx, {
      type: 'candlestick',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              tooltipFormat: 'MMM dd',
              
            },
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
              d="M3 3v18h18"
            />
          </svg>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Candlestick Chart
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
      <div className="h-80 w-full flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-xl border border-dashed border-gray-200 dark:border-gray-600 transition-colors duration-300">
        <canvas id="candlestickChart" ref={chartRef} className="w-full h-full"></canvas>
      </div>
    </section>
  );
};

export default CandlestickChart;