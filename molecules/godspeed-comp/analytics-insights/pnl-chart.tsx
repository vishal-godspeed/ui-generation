import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface PnLChartData {
  totalGainLoss: string;
  bestDay: string;
  worstDay: string;
  monthlyChange: string;
}

const PnLChart: React.FC = () => {
  const [chartData, setChartData] = useState<ChartData<'line'>>({
    labels: [],
    datasets: []
  });
  
  const [performanceData, setPerformanceData] = useState<PnLChartData>({
    totalGainLoss: '$2,340',
    bestDay: '+$320',
    worstDay: '-$120',
    monthlyChange: '+4.2%'
  });

  useEffect(() => {
    // Generate labels for the last 30 days
    const labels: string[] = Array.from({length: 30}, (_, i) => `Day ${i+1}`);
    
    // Generate random data for demonstration
    const data: ChartData<'line'> = {
      labels: labels,
      datasets: [
        {
          label: 'P&L',
          data: labels.map(() => Math.round(Math.random() * 2000 + 1000)),
          fill: true,
          backgroundColor: 'rgba(34,197,94,0.08)', // green-500/8
          borderColor: '#22c55e', // green-500
          tension: 0.4,
          pointRadius: 0,
        }
      ]
    };
    
    setChartData(data);
    
    // TODO: Insert real-time data fetching logic here (e.g., fetch from API, WebSocket)
  }, []);

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#64748b' }
      },
      y: {
        grid: { color: '#e5e7eb' },
        ticks: { color: '#64748b' }
      }
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl w-full mx-auto transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Portfolio Performance (P&L)</h3>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">1M</span>
          <span className="text-xs text-green-600 dark:text-green-400 font-semibold animate-pulse">{performanceData.monthlyChange}</span>
        </div>
      </div>
      <div className="h-64 w-full flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-xl border border-dashed border-gray-200 dark:border-gray-600 mb-6 transition-colors duration-300">
        {chartData.labels && chartData.labels.length > 0 && (
          <Line data={chartData} options={chartOptions} />
        )}
      </div>
      <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-600 dark:text-gray-300 gap-2">
        <div>Total Gain/Loss: <span className="font-bold text-green-600 dark:text-green-400">{performanceData.totalGainLoss}</span></div>
        <div>Best Day: <span className="font-bold">{performanceData.bestDay}</span></div>
        <div>Worst Day: <span className="font-bold text-red-600 dark:text-red-400">{performanceData.worstDay}</span></div>
      </div>
    </section>
  );
};

export default PnLChart;