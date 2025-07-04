const gainersLosersMD = [
  { symbol: 'NVDA', price: 1234.56, change: 5.67 },
  { symbol: 'NFLX', price: 456.78, change: -3.21 },
  { symbol: 'AAPL', price: 189.12, change: 1.23 },
  { symbol: 'TSLA', price: 1023.45, change: -0.45 },
  { symbol: 'GOOGL', price: 2812.56, change: 0.67 },
];
function renderGainersLosersMD() {
  const tbody = document.getElementById('gainers-losers-tbody-md');
  tbody.innerHTML = gainersLosersMD.map(stock => `
    <tr>
      <td class=\"px-4 py-2 font-semibold\">${stock.symbol}</td>
      <td class=\"px-4 py-2\">$${stock.price.toFixed(2)}</td>
      <td class=\"px-4 py-2 ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}\">${stock.change > 0 ? '+' : ''}${stock.change.toFixed(2)}%</td>
    </tr>
  `).join('');
}
function updateGainersLosersMD() {
  gainersLosersMD.forEach(stock => {
    const delta = (Math.random() - 0.5) * 1.5;
    stock.price = +(stock.price + delta).toFixed(2);
    stock.change = +(stock.change + delta).toFixed(2);
  });
  renderGainersLosersMD();
}
renderGainersLosersMD();
setInterval(updateGainersLosersMD, 4000);
// TODO: Insert real-time data fetching logic here (e.g., fetch from API, WebSocket) 