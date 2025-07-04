document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('lineAreaChart').getContext('2d');
  const labels = Array.from({length: 30}, (_, i) => `Day ${i+1}`);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'AAPL',
        data: labels.map(() => Math.round(Math.random() * 50 + 150)),
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.1)', // blue-500/10
        borderColor: '#3b82f6', // blue-500
        tension: 0.4,
        pointRadius: 0,
      }
    ]
  };
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      },
      scales: {
        x: {
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