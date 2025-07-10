import React, { useState, useEffect, useRef } from 'react';

interface StockData {
  name: string;
  price: number;
  change: number;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: string;
  pe: number;
}

interface StockDataMap {
  [key: string]: StockData;
}

const StockDetailPanel: React.FC = () => {
  const stockData: StockDataMap = {
    AAPL: {
      name: 'Apple Inc.',
      price: 189.12,
      change: 1.23,
      open: 187.00,
      close: 189.12,
      high: 190.00,
      low: 186.50,
      volume: '12.3M',
      pe: 28.5
    },
    TSLA: {
      name: 'Tesla, Inc.',
      price: 1023.45,
      change: -0.45,
      open: 1010.00,
      close: 1023.45,
      high: 1030.00,
      low: 1005.00,
      volume: '8.7M',
      pe: 55.2
    },
    GOOGL: {
      name: 'Alphabet Inc.',
      price: 2812.56,
      change: 0.67,
      open: 2800.00,
      close: 2812.56,
      high: 2825.00,
      low: 2790.00,
      volume: '5.1M',
      pe: 32.1
    }
  };

  const [selectedSymbol, setSelectedSymbol] = useState<string>('AAPL');
  const [currentPrice, setCurrentPrice] = useState<number>(stockData.AAPL.price);
  const priceRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  const handleSymbolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSymbol = e.target.value;
    setSelectedSymbol(newSymbol);
    
    // Animate price change
    animateValue(stockData[selectedSymbol].price, stockData[newSymbol].price);
  };

  const animateValue = (start: number, end: number, duration: number = 500) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const range = end - start;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCurrentPrice(start + range * progress);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(step);
  };

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Initialize current price
  useEffect(() => {
    setCurrentPrice(stockData[selectedSymbol].price);
  }, []);

  const currentStock = stockData[selectedSymbol];
  const isPositiveChange = currentStock.change >= 0;

  return (
    <section className="w-full max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </span>
          <div>
            <select 
              value={selectedSymbol}
              onChange={handleSymbolChange}
              className="text-xl font-bold text-gray-900 dark:text-white bg-transparent border-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 rounded transition"
            >
              <option value="AAPL">AAPL</option>
              <option value="TSLA">TSLA</option>
              <option value="GOOGL">GOOGL</option>
            </select>
            <div className="text-xs text-gray-500 dark:text-gray-400">{currentStock.name}</div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span ref={priceRef} className="text-2xl font-bold text-gray-900 dark:text-white">
            ${currentPrice.toFixed(2)}
          </span>
          <span 
            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mt-1 transition-colors duration-300 ${
              isPositiveChange 
                ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400' 
                : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-400'
            }`}
          >
            {isPositiveChange ? '+' : ''}{currentStock.change.toFixed(2)}%
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
        <div className="bg-gray-50 dark:bg-gray-700 rounded p-2">
          Open <span className="block font-medium text-gray-900 dark:text-white">${currentStock.open.toFixed(2)}</span>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded p-2">
          Close <span className="block font-medium text-gray-900 dark:text-white">${currentStock.close.toFixed(2)}</span>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded p-2">
          High <span className="block font-medium text-gray-900 dark:text-white">${currentStock.high.toFixed(2)}</span>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded p-2">
          Low <span className="block font-medium text-gray-900 dark:text-white">${currentStock.low.toFixed(2)}</span>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded p-2">
          Volume <span className="block font-medium text-gray-900 dark:text-white">{currentStock.volume}</span>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 rounded p-2">
          P/E <span className="block font-medium text-gray-900 dark:text-white">{currentStock.pe}</span>
        </div>
      </div>
    </section>
  );
};

export default StockDetailPanel;