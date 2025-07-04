const bids = [
  { qty: 100, price: 189.10 },
  { qty: 80, price: 189.05 },
  { qty: 60, price: 189.00 }
];
const asks = [
  { qty: 50, price: 189.15 },
  { qty: 70, price: 189.20 },
  { qty: 90, price: 189.25 }
];
function renderOrderBook() {
  const bidsUl = document.getElementById('order-book-bids');
  const asksUl = document.getElementById('order-book-asks');
  bidsUl.innerHTML = bids.map(bid => `<li class="flex justify-between"><span class="text-green-700 font-semibold">${bid.qty}</span> <span>@</span> <span class="text-green-500 font-bold">$${bid.price.toFixed(2)}</span></li>`).join('');
  asksUl.innerHTML = asks.map(ask => `<li class="flex justify-between"><span class="text-red-700 font-semibold">${ask.qty}</span> <span>@</span> <span class="text-red-500 font-bold">$${ask.price.toFixed(2)}</span></li>`).join('');
}
function updateOrderBook() {
  // Simulate random changes
  bids.forEach(bid => {
    bid.price += (Math.random() - 0.5) * 0.05;
    bid.qty += Math.round((Math.random() - 0.5) * 10);
    if (bid.qty < 1) bid.qty = 1;
  });
  asks.forEach(ask => {
    ask.price += (Math.random() - 0.5) * 0.05;
    ask.qty += Math.round((Math.random() - 0.5) * 10);
    if (ask.qty < 1) ask.qty = 1;
  });
  renderOrderBook();
}
renderOrderBook();
setInterval(updateOrderBook, 2000);
// TODO: Insert real-time data fetching logic here (e.g., fetch from API, WebSocket) 