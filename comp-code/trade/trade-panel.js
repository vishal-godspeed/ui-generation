const buyBtn = document.getElementById('buy-btn');
const sellBtn = document.getElementById('sell-btn');
const form = document.getElementById('trade-form');
const symbolSelect = document.getElementById('symbol-select');
const priceInput = document.getElementById('price-input');
const qtyInput = document.getElementById('qty-input');
const orderValue = document.getElementById('order-value');
const successMsg = document.getElementById('trade-success');

const prices = { AAPL: 189.12, TSLA: 1023.45, GOOGL: 2812.56 };
let orderType = 'Buy';

function updateOrderValue() {
  const price = parseFloat(priceInput.value) || 0;
  const qty = parseInt(qtyInput.value) || 0;
  orderValue.textContent = `$${(price * qty).toFixed(2)}`;
}

buyBtn.addEventListener('click', () => {
  orderType = 'Buy';
  buyBtn.classList.add('bg-green-500', 'text-white');
  buyBtn.classList.remove('bg-gray-100', 'text-gray-700');
  sellBtn.classList.remove('bg-red-500', 'text-white');
  sellBtn.classList.add('bg-gray-100', 'text-gray-700');
});

sellBtn.addEventListener('click', () => {
  orderType = 'Sell';
  sellBtn.classList.add('bg-red-500', 'text-white');
  sellBtn.classList.remove('bg-gray-100', 'text-gray-700');
  buyBtn.classList.remove('bg-green-500', 'text-white');
  buyBtn.classList.add('bg-gray-100', 'text-gray-700');
});

symbolSelect.addEventListener('change', () => {
  priceInput.value = prices[symbolSelect.value];
  updateOrderValue();
});

priceInput.addEventListener('input', updateOrderValue);
qtyInput.addEventListener('input', updateOrderValue);

form.addEventListener('submit', e => {
  e.preventDefault();
  successMsg.classList.remove('hidden');
  setTimeout(() => successMsg.classList.add('hidden'), 2000);
  form.reset();
  priceInput.value = prices[symbolSelect.value];
  updateOrderValue();
});

// TODO: Insert real-time data fetching logic here (e.g., fetch from API, WebSocket)

// Initialize
priceInput.value = prices[symbolSelect.value];
updateOrderValue();
buyBtn.click(); 