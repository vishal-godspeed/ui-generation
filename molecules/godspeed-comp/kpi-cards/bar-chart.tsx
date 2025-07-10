import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
  borderRadius: number;
  barPercentage: number;
  categoryPercentage: number;
}

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

interface BarChartData {
  Week: ChartData;
  Month: ChartData;
  Yearly: ChartData;
  [key: string]: ChartData;
}

const BarChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedPeriod, setSelectedPeriod] = useState<string>('Week');
  
  // Chart data
  const barData: BarChartData = {
    Week: {
      labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [
        { 
          label: 'Activity statistics', 
          data: [14, 16, 13, 17, 12, 11, 15], 
          backgroundColor: 'rgba(37, 99, 235, 0.7)', 
          borderRadius: 6, 
          barPercentage: 0.5, 
          categoryPercentage: 0.5 
        },
        { 
          label: 'Sale statistics', 
          data: [18, 17, 15, 18, 16, 14, 16], 
          backgroundColor: 'rgba(59, 130, 246, 0.2)', 
          borderRadius: 6, 
          barPercentage: 0.5, 
          categoryPercentage: 0.5 
        }
      ]
    },
    Month: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        { 
          label: 'Activity statistics', 
          data: [60, 70, 65, 80], 
          backgroundColor: 'rgba(37, 99, 235, 0.7)', 
          borderRadius: 6, 
          barPercentage: 0.5, 
          categoryPercentage: 0.5 
        },
        { 
          label: 'Sale statistics', 
          data: [75, 68, 72, 85], 
          backgroundColor: 'rgba(59, 130, 246, 0.2)', 
          borderRadius: 6, 
          barPercentage: 0.5, 
          categoryPercentage: 0.5 
        }
      ]
    },
    Yearly: {
      labels: ['2020', '2021', '2022', '2023'],
      datasets: [
        { 
          label: 'Activity statistics', 
          data: [700, 800, 900, 950], 
          backgroundColor: 'rgba(37, 99, 235, 0.7)', 
          borderRadius: 6, 
          barPercentage: 0.5, 
          categoryPercentage: 0.5 
        },
        { 
          label: 'Sale statistics', 
          data: [850, 900, 950, 1000], 
          backgroundColor: 'rgba(59, 130, 246, 0.2)', 
          borderRadius: 6, 
          barPercentage: 0.5, 
          categoryPercentage: 0.5 
        }
      ]
    }
  };

  // Initialize chart
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        // Destroy existing chart instance if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        // Create new chart
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: barData[selectedPeriod],
          options: {
            responsive: true,
            plugins: { 
              legend: { display: false }, 
              tooltip: { enabled: true } 
            },
            scales: {
              x: { 
                grid: { display: false }, 
                ticks: { 
                  color: '#64748b', 
                  font: { family: 'inherit' } 
                } 
              },
              y: { 
                beginAtZero: true, 
                grid: { color: '#e5e7eb' }, 
                ticks: { 
                  color: '#64748b', 
                  callback: (v) => `${v}:00`, 
                  stepSize: 2, 
                  font: { family: 'inherit' } 
                } 
              }
            }
          }
        });
      }
    }
    
    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [selectedPeriod]);

  // Handle dropdown selection
  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownOpen) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-xl text-gray-900">Activity statistics</h2>
          <div className="relative ml-2">
            <button 
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium flex items-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            > 
              <span>{selectedPeriod}</span> 
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-28 bg-white rounded-lg shadow-lg py-1 z-10">
                {Object.keys(barData).map((period) => (
                  <button 
                    key={period}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50"
                    onClick={() => handlePeriodChange(period)}
                  >
                    {period}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>Last date for <span className="font-semibold text-gray-700">28 Feb - 5 Mar 2023</span></span>
          <span className="ml-2">
            <svg className="inline w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 8v4l3 3"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </span>
          <span className="ml-2">
            <svg className="inline w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-6 mb-2">
        <span className="flex items-center gap-1 text-gray-700 text-sm">
          <span className="inline-block w-3 h-3 rounded-full bg-black"></span>
          Activity statistics
        </span>
        <span className="flex items-center gap-1 text-red-500 text-sm">
          <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
          Sale statistics
        </span>
      </div>
      <div className="w-full h-64">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default BarChart;