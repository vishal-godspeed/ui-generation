import React, { useState, useEffect } from 'react';

interface Trade {
  action: 'Buy' | 'Sell';
  qty: number;
  symbol: string;
  status: 'Filled' | 'Pending';
  time: string;
}

const OrderExecutionSummary = () => {
  const [trades, setTrades] = useState<Trade[]>([
    { action: 'Buy', qty: 50, symbol: 'AAPL', status: 'Filled', time: '10:32:15' },
    { action: 'Sell', qty: 20, symbol: 'TSLA', status: 'Pending', time: '10:33:02' },
    { action: 'Buy', qty: 10, symbol: 'GOOGL', status: 'Filled', time: '10:34:10' },
  ]);

  useEffect(() => {
    const updateTrades = () => {
      // Simulate new trade
      const now = new Date();
      const actions = ['Buy', 'Sell'] as const;
      const symbols = ['AAPL', 'TSLA', 'GOOGL'];
      const statuses = ['Filled', 'Pending'] as const;
      const status = statuses[Math.floor(Math.random() * statuses.length)];

      setTrades((prevTrades) => {
        const newTrade: Trade = {
          action: actions[Math.floor(Math.random() * actions.length)],
          qty: Math.floor(Math.random() * 100 + 1),
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          status,
          time: now.toLocaleTimeString(),
        };
        const updatedTrades = [newTrade, ...prevTrades];
        return updatedTrades.length > 5 ? updatedTrades.slice(0, 5) : updatedTrades;
      });
    };

    const intervalId = setInterval(updateTrades, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-lg w-full mx-auto transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Order Execution Summary</h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">Recent</span>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700 text-sm">
        {trades.map((trade, index) => (
          <li key={index} className="py-2 flex justify-between items-center">
            <span>
              {trade.action} {trade.qty} <span className="font-semibold">{trade.symbol}</span>
            </span>
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${trade.status === 'Filled' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
              {trade.status}
            </span>
            <span className="text-gray-500">{trade.time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OrderExecutionSummary;