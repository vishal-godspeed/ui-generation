
```yaml
componentName: Trade Panel
filename: DOCS_METADATA/molecules/godspeed-comp/trade-panel
category: trade
layout: card, form, trade
primaryUse: Place Buy/Sell Orders
responsive: true
description: A modern, interactive trade panel for placing buy/sell orders. Features a buy/sell toggle, symbol selection, live order value calculation, and animated success feedback. Designed for dashboards and trading platforms.
uses: dashboard, trading
dependencies: [react]
devDependencies: [typescript]
```
---
```yaml
componentName: Order Book
filename: DOCS_METADATA/molecules/godspeed-comp/order-book
category: trade
layout: card, order-book
primaryUse: Display Real-Time Bids/Asks
responsive: true
description: A live-updating order book showing real-time bids and asks with color-coded quantities and prices. Ideal for trading dashboards and market depth visualization.
uses: dashboard, trading
dependencies: [react]
devDependencies: [typescript]
```
---
```yaml
componentName: Order Execution Summary
filename: DOCS_METADATA/molecules/godspeed-comp/order-execution-summary
category: trade
layout: card, summary
primaryUse: Show Recent Trades and Order Status
responsive: true
description: A summary card listing recent trades, their status (filled/pending), and timestamps. Designed for trading dashboards to track order activity.
uses: dashboard, trading
dependencies: [react]
devDependencies: [typescript]
```
---
```yaml
componentName: Candlestick Chart
filename: DOCS_METADATA/molecules/godspeed-comp/candlestick-chart
category: trade
layout: card, chart, candlestick
primaryUse: Visualize Stock Price Movements
responsive: true
description: An interactive candlestick chart for visualizing stock price movements and technical analysis. Built with Chart.js and chartjs-chart-financial. Supports time filters and is suitable for trading dashboards.
dependencies: [react,chart.js,chartjs-chart-financial,date-fns]
devDependencies: [typescript]
```
---
```yaml
componentName: Line Area Chart
filename: DOCS_METADATA/molecules/godspeed-comp/line-area-chart
category: trade
layout: card, chart, line, area
primaryUse: Visualize Price Trends
responsive: true
description: A dynamic line/area chart for visualizing price trends over time. Built with Chart.js. Supports multiple time ranges and is ideal for trading dashboards.
dependencies: [react,chart.js]
devDependencies: [typescript]
```
---
```yaml
componentName: Stock Ticker
filename: DOCS_METADATA/molecules/godspeed-comp/stock-ticker
category: trade
layout: ticker, bar, live
primaryUse: Display Live Stock Prices
responsive: true
description: A horizontally scrolling, live-updating stock ticker bar. Shows real-time prices and percent changes for multiple stocks. Ideal for dashboards and trading platforms.
dependencies: [react]
devDependencies: [typescript]
```
---
```yaml
componentName: Watchlist Table
filename: DOCS_METADATA/molecules/godspeed-comp/watchlist-table
category: trade
layout: card, table, watchlist
primaryUse: Display Watchlist Stocks
responsive: true
description: A responsive table for displaying a user's stock watchlist, including symbol, price, and percent change. Designed for dashboards and trading platforms.
dependencies: [react]
devDependencies: [typescript]
```
---