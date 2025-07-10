import React, { useState, useEffect } from 'react';

interface Stock {
  symbol: string;
  price: number;
  change: number;
}

interface TopGainersLosersProps {
  darkMode?: boolean;
}

const TopGainersLosers: React.FC<TopGainersLosersProps> = ({ darkMode = false }) => {
  const [stocks, setStocks] = useState<Stock[]>([
    { symbol: 'NVDA', price: 1234.56, change: 5.67 },
    { symbol: 'NFLX', price: 456.78, change: -3.21 },
    { symbol: 'AAPL', price: 189.12, change: 1.23 },
    { symbol: 'TSLA', price: 1023.45, change: -0.45 },
    { symbol: 'GOOGL', price: 2812.56, change: 0.67 },
  ]);

  // Function to update stock prices and changes
  const updateStocks = () => {
    setStocks(prevStocks => 
      prevStocks.map(stock => {
        const delta = (Math.random() - 0.5) * 1.5;
        const newPrice = +(stock.price + delta).toFixed(2);
        const newChange = +(stock.change + delta).toFixed(2);
        
        return {
          ...stock,
          price: newPrice,
          change: newChange
        };
      })
    );
  };

  // Update stocks every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(updateStocks, 4000);
    return () => clearInterval(intervalId);
  }, []);

  // Sort stocks by change (descending) to show gainers first, then losers
  const sortedStocks = [...stocks].sort((a, b) => b.change - a.change);

  return (
    <section className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl p-8 max-w-xl w-full mx-auto transition-colors duration-300`}>
      <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        Top Gainers & Losers
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transition-colors duration-300`}>
              <th className={`px-4 py-2 text-left font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Symbol
              </th>
              <th className={`px-4 py-2 text-left font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Price
              </th>
              <th className={`px-4 py-2 text-left font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedStocks.map((stock, index) => (
              <tr key={index}>
                <td className="px-4 py-2 font-semibold">
                  {stock.symbol}
                </td>
                <td className="px-4 py-2">
                  ${stock.price.toFixed(2)}
                </td>
                <td className={`px-4 py-2 ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TopGainersLosers;