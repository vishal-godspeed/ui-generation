import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

interface ScatterDataPoint {
  x: number;
  y: number;
}

interface ChartDataset {
  label: string;
  data: ScatterDataPoint[];
  backgroundColor: string;
}

interface ChartData {
  datasets: ChartDataset[];
}

interface ScatterChartData {
  Week: ChartData;
  Month: ChartData;
  Yearly: ChartData;
  [key: string]: ChartData;
}

const ScatterChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedPeriod, setSelectedPeriod] = useState<string>('Week');
  
  // Chart data
  const scatterData: ScatterChartData = {
    Week: {
      datasets: [
        { 
          label: 'Activity statistics', 
          data: [
            {x: 1, y: 14},
            {x: 2, y: 16},
            {x: 3, y: 13},
            {x: 4, y: 17},
            {x: 5, y: 12},
            {x: 6, y: 11},
            {x: 7, y: 15}
          ], 
          backgroundColor: 'rgba(37, 99, 235, 0.7)' 
        },
        { 
          label: 'Sale statistics', 
          data: [
            {x: 1, y: 18},
            {x: 2, y: 17},
            {x: 3, y: 15},
            {x: 4, y: 18},
            {x: 5, y: 16},
            {x: 6, y: 14},
            {x: 7, y: 16}
          ], 
          backgroundColor: 'rgba(239, 68, 68, 0.7)' 
        }
      ]
    },
    Month: {
      datasets: [
        { 
          label: 'Activity statistics', 
          data: [
            {x: 1, y: 60},
            {x: 2, y: 70},
            {x: 3, y: 65},
            {x: 4, y: 80}
          ], 
          backgroundColor: 'rgba(37, 99, 235, 0.7)' 
        },
        { 
          label: 'Sale statistics', 
          data: [
            {x: 1, y: 75},
            {x: 2, y: 68},
            {x: 3, y: 72},
            {x: 4, y: 85}
          ], 
          backgroundColor: 'rgba(239, 68, 68, 0.7)' 
        }
      ]
    },
    Yearly: {
      datasets: [
        { 
          label: 'Activity statistics', 
          data: [
            {x: 1, y: 700},
            {x: 2, y: 800},
            {x: 3, y: 900},
            {x: 4, y: 950}
          ], 
          backgroundColor: 'rgba(37, 99, 235, 0.7)' 
        },
        { 
          label: 'Sale statistics', 
          data: [
            {x: 1, y: 850},
            {x: 2, y: 900},
            {x: 3, y: 950},
            {x: 4, y: 1000}
          ], 
          backgroundColor: 'rgba(239, 68, 68, 0.7)' 
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
          type: 'scatter',
          data: scatterData[selectedPeriod],
          options: {
            responsive: true,
            plugins: { 
              legend: { display: false }, 
              tooltip: { enabled: true } 
            },
            scales: {
              x: { 
                grid: { color: '#e5e7eb' }, 
                title: { 
                  display: true, 
                  text: 'X', 
                  color: '#64748b', 
                  font: { family: 'inherit' } 
                }, 
                ticks: { 
                  color: '#64748b', 
                  font: { family: 'inherit' } 
                } 
              },
              y: { 
                grid: { color: '#e5e7eb' }, 
                title: { 
                  display: true, 
                  text: 'Y', 
                  color: '#64748b', 
                  font: { family: 'inherit' } 
                }, 
                ticks: { 
                  color: '#64748b', 
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
                {Object.keys(scatterData).map((period) => (
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

export default ScatterChart;