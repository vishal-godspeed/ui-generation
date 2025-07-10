import React from 'react';

interface Stock {
  symbol: string;
  price: number;
  change: string;
}

const WatchlistTable = () => {
  const stocks: Stock[] = [
    { symbol: 'AAPL', price: 189.12, change: '+1.23%' },
    { symbol: 'TSLA', price: 1023.45, change: '-0.45%' },
  ];

  return (
    <section className="w-full max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
      <div className="flex items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-pink-500 dark:text-pink-300 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Watchlist</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
              <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Symbol</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Price</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">% Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {stocks.map((stock) => (
              <tr key={stock.symbol}>
                <td className="px-4 py-2 font-semibold flex items-center space-x-2">
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-blue-100 dark:bg-blue-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500 dark:text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                  </span>
                  <span className="text-gray-900 dark:text-white">{stock.symbol}</span>
                </td>
                <td className="px-4 py-2 text-gray-900 dark:text-white">${stock.price}</td>
                <td className="px-4 py-2">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${stock.change.startsWith('+') ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400' : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-400'}`}>
                    {stock.change}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WatchlistTable;