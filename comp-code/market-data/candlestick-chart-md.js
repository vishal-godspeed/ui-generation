document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('candlestickChartMD').getContext('2d');
  function randomBar(date) {
    const open = Math.random() * 100 + 100;
    const close = open + (Math.random() - 0.5) * 10;
    const high = Math.max(open, close) + Math.random() * 5;
    const low = Math.min(open, close) - Math.random() * 5;
    return { x: date, o: open, h: high, l: low, c: close };
  }
  function getData(count) {
    const data = [];
    let date = new Date();
    for (let i = 0; i < count; i++) {
      data.unshift(randomBar(new Date(date)));
      date.setDate(date.getDate() - 1);
    }
    return data;
  }
  const data = {
    datasets: [{
      label: 'AAPL',
      data: getData(30),
      color: {
        up: '#22c55e',
        down: '#ef4444',
        unchanged: '#64748b'
      },
      borderColor: '#64748b',
      borderWidth: 1,
    }]
  };
  new Chart(ctx, {
    type: 'candlestick',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      },
      scales: {
        x: {
          type: 'time',
          time: { unit: 'day', tooltipFormat: 'MMM dd' },
          grid: { display: false },
          ticks: { color: '#64748b' }
        },
        y: {
          grid: { color: '#e5e7eb' },
          ticks: { color: '#64748b' }
        }
      }
    }
  });
});
// TODO: Insert real-time data fetching logic here (e.g., fetch from API, WebSocket) 