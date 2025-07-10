import React, { useState, useEffect } from 'react';

const TradePanel = () => {
  const [orderType, setOrderType] = useState<'Buy' | 'Sell'>('Buy');
  const [symbol, setSymbol] = useState('AAPL');
  const [price, setPrice] = useState(189.12);
  const [qty, setQty] = useState(1);
  const [orderValue, setOrderValue] = useState(189.12);
  const [success, setSuccess] = useState(false);

  const prices = { AAPL: 189.12, TSLA: 1023.45, GOOGL: 2812.56 };

  useEffect(() => {
    const calculateOrderValue = () => {
      setOrderValue(parseFloat((price * qty).toFixed(2)));
    };

    calculateOrderValue();
  }, [price, qty]);

  const handleSymbolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSymbol = e.target.value;
    setSymbol(selectedSymbol);
    setPrice(prices[selectedSymbol as keyof typeof prices]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto transition-colors duration-300">
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white tracking-tight">Trade Panel</h3>
      <form id="trade-form" className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex justify-center gap-4 mb-2">
          <button
            type="button"
            onClick={() => setOrderType('Buy')}
            className={`flex-1 py-2 rounded-lg font-semibold text-white ${orderType === 'Buy' ? 'bg-green-500 hover:bg-green-600 focus:ring-green-400' : 'bg-gray-100 text-gray-700 hover:bg-green-100'} focus:outline-none focus:ring-2 transition`}
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => setOrderType('Sell')}
            className={`flex-1 py-2 rounded-lg font-semibold text-white ${orderType === 'Sell' ? 'bg-red-500 hover:bg-red-600 focus:ring-red-400' : 'bg-gray-100 text-gray-700 hover:bg-red-100'} focus:outline-none focus:ring-2 transition`}
          >
            Sell
          </button>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Symbol</label>
          <select
            id="symbol-select"
            className="w-full rounded-lg border-gray-300 dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:ring-blue-500 transition"
            value={symbol}
            onChange={handleSymbolChange}
          >
            <option value="AAPL">AAPL</option>
            <option value="TSLA">TSLA</option>
            <option value="GOOGL">GOOGL</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Price</label>
          <input
            id="price-input"
            type="number"
            className="w-full rounded-lg border-gray-300 dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:ring-blue-500 transition"
            placeholder="$0.00"
            step={0.01}
            min={0}
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Quantity</label>
          <input
            id="qty-input"
            type="number"
            className="w-full rounded-lg border-gray-300 dark:bg-gray-900 dark:border-gray-700 dark:text-white focus:ring-blue-500 transition"
            placeholder="0"
            min={1}
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value))}
          />
        </div>
        <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          <span>Order Value:</span>
          <span id="order-value" className="font-bold text-blue-600 dark:text-blue-400">
            ${orderValue.toFixed(2)}
          </span>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center gap-2 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Place Order
        </button>
        <div id="trade-success" className={`mt-4 text-center text-green-600 dark:text-green-400 font-semibold ${success ? '' : 'hidden'}`}>
          Order placed successfully!
        </div>
      </form>
    </section>
  );
};

export default TradePanel;