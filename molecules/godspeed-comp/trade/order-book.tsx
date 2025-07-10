import React, { useState, useEffect } from 'react';

interface Order {
  qty: number;
  price: number;
}

const OrderBook = () => {
  const [bids, setBids] = useState<Order[]>([
    { qty: 100, price: 189.10 },
    { qty: 80, price: 189.05 },
    { qty: 60, price: 189.00 },
  ]);
  const [asks, setAsks] = useState<Order[]>([
    { qty: 50, price: 189.15 },
    { qty: 70, price: 189.20 },
    { qty: 90, price: 189.25 },
  ]);

  useEffect(() => {
    const updateOrderBook = () => {
      // Simulate random changes
      setBids((prevBids) =>
        prevBids.map((bid) => {
          const newPrice = bid.price + (Math.random() - 0.5) * 0.05;
          let newQty = bid.qty + Math.round((Math.random() - 0.5) * 10);
          if (newQty < 1) newQty = 1;
          return { ...bid, price: newPrice, qty: newQty };
        })
      );

      setAsks((prevAsks) =>
        prevAsks.map((ask) => {
          const newPrice = ask.price + (Math.random() - 0.5) * 0.05;
          let newQty = ask.qty + Math.round((Math.random() - 0.5) * 10);
          if (newQty < 1) newQty = 1;
          return { ...ask, price: newPrice, qty: newQty };
        })
      );
    };

    const intervalId = setInterval(updateOrderBook, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-lg w-full mx-auto transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Order Book</h3>
        <span className="text-xs text-gray-500 dark:text-gray-400">Live</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2 flex items-center text-green-600 dark:text-green-400">
            Bids{' '}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </h4>
          <ul className="space-y-1">
            {bids.map((bid, index) => (
              <li key={index} className="flex justify-between">
                <span className="text-green-700 font-semibold">{bid.qty}</span>
                <span>@</span>
                <span className="text-green-500 font-bold">${bid.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 flex items-center text-red-600 dark:text-red-400">
            Asks{' '}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </h4>
          <ul className="space-y-1">
            {asks.map((ask, index) => (
              <li key={index} className="flex justify-between">
                <span className="text-red-700 font-semibold">{ask.qty}</span>
                <span>@</span>
                <span className="text-red-500 font-bold">${ask.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrderBook;