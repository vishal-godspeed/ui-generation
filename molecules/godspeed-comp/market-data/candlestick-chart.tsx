import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-chart-financial';
import { TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

interface CandlestickData {
  x: Date;
  o: number; // open
  h: number; // high
  l: number; // low
  c: number; // close
}

interface CandlestickChartProps {
  darkMode?: boolean;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ darkMode = false }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [timeRange, setTimeRange] = useState<'1D' | '1W' | '1M' | '1Y'>('1M');
  const chartInstance = useRef<Chart | null>(null);

  // Generate random candlestick data
  const randomBar = (date: Date): CandlestickData => {
    const open = Math.random() * 100 + 100;
    const close = open + (Math.random() - 0.5) * 10;
    const high = Math.max(open, close) + Math.random() * 5;
    const low = Math.min(open, close) - Math.random() * 5;
    return { x: date, o: open, h: high, l: low, c: close };
  };

  const getData = (count: number): CandlestickData[] => {
    const data: CandlestickData[] = [];
    let date = new Date();
    for (let i = 0; i < count; i++) {
      data.unshift(randomBar(new Date(date)));
      date.setDate(date.getDate() - 1);
    }
    return data;
  };

  // Update chart based on time range
  const updateChart = () => {
    if (!chartRef.current) return;

    // Destroy previous chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Determine data points based on selected time range
    let dataPoints = 30; // Default to 1M (30 days)
    
    switch (timeRange) {
      case '1D':
        dataPoints = 24; // 24 hours
        break;
      case '1W':
        dataPoints = 7; // 7 days
        break;
      case '1M':
        dataPoints = 30; // 30 days
        break;
      case '1Y':
        dataPoints = 365; // 365 days
        break;
    }

    const data = {
      datasets: [{
        label: 'AAPL',
        data: getData(dataPoints),
        color: {
          up: '#22c55e',
          down: '#ef4444',
          unchanged: '#64748b'
        },
        borderColor: '#64748b',
        borderWidth: 1,
      }]
    };

    // Create new chart
    chartInstance.current = new Chart(ctx, {
      type: 'candlestick',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            type: 'time',
            time: { 
              unit: timeRange === '1D' ? 'hour' : 'day', 
              tooltipFormat: timeRange === '1D' ? 'HH:mm' : 'MMM dd' 
            },
            grid: { display: false },
            ticks: { 
              color: darkMode ? '#94a3b8' : '#64748b' 
            }
          },
          y: {
            grid: { 
              color: darkMode ? '#334155' : '#e5e7eb' 
            },
            ticks: { 
              color: darkMode ? '#94a3b8' : '#64748b' 
            }
          }
        }
      }
    });
  };

  // Initialize chart on component mount
  useEffect(() => {
    updateChart();
    
    // Cleanup on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [timeRange, darkMode]);

  return (
    <section className={`w-full max-w-2xl mx-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl p-8 transition-colors duration-300`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-6 w-6 ${darkMode ? 'text-blue-300' : 'text-blue-500'}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18h18" />
          </svg>
          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Candlestick Chart
          </h3>
        </div>
        <div className="flex space-x-1">
          {(['1D', '1W', '1M', '1Y'] as const).map((range) => (
            <button
              key={range}
              className={`px-3 py-1 text-xs rounded ${
                timeRange === range 
                  ? `${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}` 
                  : `${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'}`
              } font-medium hover:bg-blue-100 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
              onClick={() => setTimeRange(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      <div className={`h-80 w-full flex items-center justify-center ${
        darkMode ? 'bg-gray-700' : 'bg-gray-50'
      } rounded-xl border border-dashed ${
        darkMode ? 'border-gray-600' : 'border-gray-200'
      } transition-colors duration-300`}>
        <canvas ref={chartRef} className="w-full h-full"></canvas>
      </div>
    </section>
  );
};

export default CandlestickChart;