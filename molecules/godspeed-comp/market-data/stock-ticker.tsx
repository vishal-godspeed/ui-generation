import React, { useState, useEffect, useRef } from 'react';

interface Stock {
  symbol: string;
  price: number;
  change: number;
  color: 'green' | 'red';
}

interface StockTickerProps {
  darkMode?: boolean;
}

const StockTicker: React.FC<StockTickerProps> = ({ darkMode = false }) => {
  const [stocks, setStocks] = useState<Stock[]>([
    { symbol: 'AAPL', price: 189.12, change: 1.23, color: 'green' },
    { symbol: 'GOOGL', price: 2812.56, change: -0.45, color: 'red' },
    { symbol: 'TSLA', price: 1023.45, change: 2.10, color: 'green' },
    { symbol: 'MSFT', price: 345.67, change: 0.67, color: 'green' },
    { symbol: 'AMZN', price: 134.56, change: -1.12, color: 'red' },
    { symbol: 'NVDA', price: 1234.56, change: 5.67, color: 'green' },
  ]);

  const tickerRef = useRef<HTMLDivElement>(null);

  // Function to update stock prices
  const updatePrices = () => {
    setStocks(prevStocks => 
      prevStocks.map(stock => {
        const delta = (Math.random() - 0.5) * 0.5;
        const newPrice = +(stock.price + delta).toFixed(2);
        const newChange = +(stock.change + delta).toFixed(2);
        const newColor = newChange >= 0 ? 'green' : 'red';
        
        return {
          ...stock,
          price: newPrice,
          change: newChange,
          color: newColor
        };
      })
    );
  };

  // Auto-scroll the ticker
  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let scrollAmount = 0;
    let animationFrameId: number;
    
    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount > ticker.scrollWidth - ticker.clientWidth) {
        scrollAmount = 0;
      }
      ticker.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Update prices every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(updatePrices, 2000);
    return () => clearInterval(intervalId);
  }, []);

  // Render up or down arrow based on stock performance
  const renderIcon = (color: 'green' | 'red') => {
    if (color === 'green') {
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 text-green-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      );
    } else {
      return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 text-red-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      );
    }
  };

  return (
    <section 
      ref={tickerRef}
      className={`w-full max-w-4xl mx-auto ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
      } rounded-2xl shadow-lg flex items-center px-8 py-4 overflow-x-auto space-x-8 border transition-colors duration-300`}
    >
      {stocks.map((stock, index) => (
        <div key={index} className="flex items-center space-x-2 min-w-max">
          {renderIcon(stock.color)}
          <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {stock.symbol}
          </span>
          <span className="text-gray-500">
            ${stock.price.toFixed(2)}
          </span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${stock.color}-100 text-${stock.color}-700`}>
            {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%
          </span>
        </div>
      ))}
    </section>
  );
};

export default StockTicker;