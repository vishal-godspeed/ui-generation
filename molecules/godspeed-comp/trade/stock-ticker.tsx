import React, { useState, useEffect, useRef } from 'react';

interface Stock {
  symbol: string;
  price: number;
  change: number;
  color: 'green' | 'red';
}

const StockTicker = () => {
  const [stocks, setStocks] = useState<Stock[]>([
    { symbol: 'AAPL', price: 189.12, change: 1.23, color: 'green' },
    { symbol: 'GOOGL', price: 2812.56, change: -0.45, color: 'red' },
    { symbol: 'TSLA', price: 1023.45, change: 2.10, color: 'green' },
    { symbol: 'MSFT', price: 345.67, change: 0.67, color: 'green' },
    { symbol: 'AMZN', price: 134.56, change: -1.12, color: 'red' },
    { symbol: 'NVDA', price: 1234.56, change: 5.67, color: 'green' },
  ]);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePrices = () => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => {
          // Simulate small random price changes
          const delta = (Math.random() - 0.5) * 0.5;
          const newPrice = +(stock.price + delta).toFixed(2);
          const newChange = +(stock.change + delta).toFixed(2);
          const newColor = newChange >= 0 ? 'green' : 'red';
          return { ...stock, price: newPrice, change: newChange, color: newColor };
        })
      );
    };

    const intervalId = setInterval(updatePrices, 2000);

    // Auto-scroll effect
    const autoScrollTicker = () => {
      const bar = tickerRef.current;
      if (!bar) return;
      let scrollAmount = 0;
      setInterval(() => {
        scrollAmount += 1;
        if (scrollAmount > bar.scrollWidth - bar.clientWidth) scrollAmount = 0;
        bar.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }, 50);
    };

    autoScrollTicker();

    return () => clearInterval(intervalId);
  }, []);

  const getIcon = (color: 'green' | 'red') => {
    // Use Heroicons outline trending-up or trending-down
    if (color === 'green') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      );
    } else {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      );
    }
  };

  return (
    <section
      className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center px-8 py-4 overflow-x-auto space-x-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
      id="stock-ticker-bar"
      ref={tickerRef}
    >
      {stocks.map((stock) => (
        <div key={stock.symbol} className="flex items-center space-x-2 min-w-max">
          {getIcon(stock.color)}
          <span className="font-semibold text-gray-900">{stock.symbol}</span>
          <span className="text-gray-500">${stock.price.toFixed(2)}</span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${stock.color}-100 text-${stock.color}-700`}>
            {stock.change > 0 ? '+' : ''}
            {stock.change.toFixed(2)}%
          </span>
        </div>
      ))}
    </section>
  );
};

export default StockTicker;