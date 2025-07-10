import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

interface PieChartData {
  Week: ChartData;
  Month: ChartData;
  Yearly: ChartData;
  [key: string]: ChartData;
}

const PieChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [selectedPeriod, setSelectedPeriod] = useState<string>('Week');
  
  // Chart data
  const pieData: PieChartData = {
    Week: {
      labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
      datasets: [
        { 
          label: 'Sales', 
          data: [35, 25, 20, 15, 5], 
          backgroundColor: [
            'rgba(37, 99, 235, 0.7)',
            'rgba(239, 68, 68, 0.7)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(245, 158, 11, 0.7)',
            'rgba(139, 92, 246, 0.7)'
          ],
          borderColor: [
            'rgba(37, 99, 235, 1)',
            'rgba(239, 68, 68, 1)',
            'rgba(16, 185, 129, 1)',
            'rgba(245, 158, 11, 1)',
            'rgba(139, 92, 246, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    Month: {
      labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
      datasets: [
        { 
          label: 'Sales', 
          data: [30, 22, 25, 18, 5], 
          backgroundColor: [
            'rgba(37, 99, 235, 0.7)',
            'rgba(239, 68, 68, 0.7)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(245, 158, 11, 0.7)',
            'rgba(139, 92, 246, 0.7)'
          ],
          borderColor: [
            'rgba(37, 99, 235, 1)',
            'rgba(239, 68, 68, 1)',
            'rgba(16, 185, 129, 1)',
            'rgba(245, 158, 11, 1)',
            'rgba(139, 92, 246, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    Yearly: {
      labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
      datasets: [
        { 
          label: 'Sales', 
          data: [40, 20, 15, 15, 10], 
          backgroundColor: [
            'rgba(37, 99, 235, 0.7)',
            'rgba(239, 68, 68, 0.7)',
            'rgba(16, 185, 129, 0.7)',
            'rgba(245, 158, 11, 0.7)',
            'rgba(139, 92, 246, 0.7)'
          ],
          borderColor: [
            'rgba(37, 99, 235, 1)',
            'rgba(239, 68, 68, 1)',
            'rgba(16, 185, 129, 1)',
            'rgba(245, 158, 11, 1)',
            'rgba(139, 92, 246, 1)'
          ],
          borderWidth: 1
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
          type: 'pie',
          data: pieData[selectedPeriod],
          options: {
            responsive: true,
            plugins: { 
              legend: { 
                display: true,
                position: 'bottom',
                labels: {
                  font: {
                    family: 'inherit'
                  }
                }
              }, 
              tooltip: { enabled: true } 
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
          <h2 className="font-bold text-xl text-gray-900">Product Sales Distribution</h2>
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
                {Object.keys(pieData).map((period) => (
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
      <div className="w-full h-64">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default PieChart;