const stockData = {
  AAPL: {
    name: 'Apple Inc.', price: 189.12, change: 1.23, open: 187.00, close: 189.12, high: 190.00, low: 186.50, volume: '12.3M', pe: 28.5
  },
  TSLA: {
    name: 'Tesla, Inc.', price: 1023.45, change: -0.45, open: 1010.00, close: 1023.45, high: 1030.00, low: 1005.00, volume: '8.7M', pe: 55.2
  },
  GOOGL: {
    name: 'Alphabet Inc.', price: 2812.56, change: 0.67, open: 2800.00, close: 2812.56, high: 2825.00, low: 2790.00, volume: '5.1M', pe: 32.1
  }
};
const select = document.getElementById('stock-symbol-select');
const nameDiv = document.getElementById('stock-company-name');
const priceSpan = document.getElementById('stock-price');
const changeSpan = document.getElementById('stock-change');
const statsDiv = document.getElementById('stock-stats');
function renderStats(data) {
  statsDiv.innerHTML = `
    <div class="bg-gray-50 rounded p-2">Open <span class="block font-medium text-gray-900">$${data.open}</span></div>
    <div class="bg-gray-50 rounded p-2">Close <span class="block font-medium text-gray-900">$${data.close}</span></div>
    <div class="bg-gray-50 rounded p-2">High <span class="block font-medium text-gray-900">$${data.high}</span></div>
    <div class="bg-gray-50 rounded p-2">Low <span class="block font-medium text-gray-900">$${data.low}</span></div>
    <div class="bg-gray-50 rounded p-2">Volume <span class="block font-medium text-gray-900">${data.volume}</span></div>
    <div class="bg-gray-50 rounded p-2">P/E <span class="block font-medium text-gray-900">${data.pe}</span></div>
  `;
}
function animateValue(el, start, end, duration = 500) {
  const range = end - start;
  let startTime;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    el.textContent = `$${(start + range * progress).toFixed(2)}`;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
function updatePanel(symbol) {
  const data = stockData[symbol];
  nameDiv.textContent = data.name;
  const oldPrice = parseFloat(priceSpan.textContent.replace('$', ''));
  animateValue(priceSpan, oldPrice, data.price);
  changeSpan.textContent = `${data.change > 0 ? '+' : ''}${data.change.toFixed(2)}%`;
  changeSpan.className = `inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mt-1 ${data.change >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`;
  renderStats(data);
}
select.addEventListener('change', e => updatePanel(e.target.value));
updatePanel(select.value);
// TODO: Insert real-time data fetching logic here (e.g., fetch from API, WebSocket) 