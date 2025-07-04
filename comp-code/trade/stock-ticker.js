const stocks = [
  { symbol: 'AAPL', price: 189.12, change: 1.23, color: 'green' },
  { symbol: 'GOOGL', price: 2812.56, change: -0.45, color: 'red' },
  { symbol: 'TSLA', price: 1023.45, change: 2.10, color: 'green' },
  { symbol: 'MSFT', price: 345.67, change: 0.67, color: 'green' },
  { symbol: 'AMZN', price: 134.56, change: -1.12, color: 'red' },
  { symbol: 'NVDA', price: 1234.56, change: 5.67, color: 'green' },
];

function getIcon(color) {
  // Use Heroicons outline trending-up or trending-down
  if (color === 'green') {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>`;
  } else {
    return `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>`;
  }
}

function renderTicker() {
  const bar = document.getElementById('stock-ticker-bar');
  bar.innerHTML = stocks.map(stock => `
    <div class="flex items-center space-x-2 min-w-max">
      ${getIcon(stock.color)}
      <span class="font-semibold text-gray-900">${stock.symbol}</span>
      <span class="text-gray-500">$${stock.price.toFixed(2)}</span>
      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${stock.color}-100 text-${stock.color}-700">${stock.change > 0 ? '+' : ''}${stock.change.toFixed(2)}%</span>
    </div>
  `).join('');
}

function updatePrices() {
  stocks.forEach(stock => {
    // Simulate small random price changes
    const delta = (Math.random() - 0.5) * 0.5;
    stock.price = +(stock.price + delta).toFixed(2);
    stock.change = +(stock.change + delta).toFixed(2);
    stock.color = stock.change >= 0 ? 'green' : 'red';
  });
  renderTicker();
}

// Auto-scroll effect
function autoScrollTicker() {
  const bar = document.getElementById('stock-ticker-bar');
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 1;
    if (scrollAmount > bar.scrollWidth - bar.clientWidth) scrollAmount = 0;
    bar.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }, 50);
}

// TODO: Insert real-time data fetching logic here (e.g., fetch from API, WebSocket)
renderTicker();
setInterval(updatePrices, 2000);
autoScrollTicker(); 