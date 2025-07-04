const trades = [
  { action: 'Buy', qty: 50, symbol: 'AAPL', status: 'Filled', time: '10:32:15' },
  { action: 'Sell', qty: 20, symbol: 'TSLA', status: 'Pending', time: '10:33:02' },
  { action: 'Buy', qty: 10, symbol: 'GOOGL', status: 'Filled', time: '10:34:10' }
];
function renderTrades() {
  const ul = document.getElementById('order-execution-list');
  ul.innerHTML = trades.map(trade => `
    <li class="py-2 flex justify-between items-center">
      <span>${trade.action} ${trade.qty} <span class="font-semibold">${trade.symbol}</span></span>
      <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${trade.status === 'Filled' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}">${trade.status}</span>
      <span class="text-gray-500">${trade.time}</span>
    </li>
  `).join('');
}
function updateTrades() {
  // Simulate new trade
  const now = new Date();
  const actions = ['Buy', 'Sell'];
  const symbols = ['AAPL', 'TSLA', 'GOOGL'];
  const status = Math.random() > 0.5 ? 'Filled' : 'Pending';
  trades.unshift({
    action: actions[Math.floor(Math.random() * actions.length)],
    qty: Math.floor(Math.random() * 100 + 1),
    symbol: symbols[Math.floor(Math.random() * symbols.length)],
    status,
    time: now.toLocaleTimeString()
  });
  if (trades.length > 5) trades.pop();
  renderTrades();
}
renderTrades();
setInterval(updateTrades, 3000);
// TODO: Insert real-time data fetching logic here (e.g., fetch from API, WebSocket) 