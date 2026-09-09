# Eternl Analytics [[ProButton]]

The Eternl Analytics suite is divided into four primary tabs: Portfolio, Discover, Wallet Profiler, and Multichart — designed to offer deep insights into market data and account performance.

::: info
Only available for Eternl Pro users.
:::

## Portfolio {open}
The Portfolio tab provides an overview of the selected account's total value over time, alongside a breakdown of held assets.

![Eternl Analytics - Portfolio Tab](/assets/pictures/eternl_analytics_portfolio.jpg)

* **Portfolio Chart:** Displays total portfolio value history, allowing quick performance toggling across different timeframes.

* **Asset Breakdown:** Lists holding balances, current prices, price changes (24h to 90d), and equivalent values in both ADA and your configured fiat currency.

* **Interactive Sorting:** Click any column header in the asset table (e.g., Balance, Price, 24h Change, or Value) to sort your holdings in ascending or descending order.

Note: The asset table displays significant holdings; micro-balances or low-value assets may be excluded automatically based on default display thresholds.


## Discover

The Discover tab serves as a market overview, providing high-level Cardano ecosystem stats along with a live leaderboard of tracked tokens.

![Eternl Analytics - Discover Tab](/assets/pictures/eternl_analytics_discover.jpg)

* **Ecosystem Metrics:** Displays overall network health indicators at the top, including Total Market Cap, 24h DEX Volume, Active Addresses, and Total Tokens Tracked.

* **Market Leaderboard:** Lists tracked tokens with real-time market data, including current prices, market cap (FDV), liquidity, TVL, volume, and multi-frame price performance (1h to 90d).

* **Interactive Sorting & Customization:** Click any column header (e.g., Liquidity, Volume, or 24h Performance) to sort the table in ascending or descending order for fast market analysis. Use **Reset columns** in the top-right corner to revert to the default view.

* **Favorites:** Click the star icon next to any token to mark it as a favorite. Favorited assets are automatically pinned to the top of the leaderboard for easier tracking.


## Wallet Profiler

The Wallet Profiler unlocks the full power of public Cardano on-chain data. While transaction histories and wallet balances are permanently visible on the blockchain, this tool makes that raw data instantly accessible, readable, and structured. It allows anyone to effortlessly inspect market makers, track large portfolio holdings, or analyze trading patterns in real time without navigating complex block explorers.

![Eternl Analytics - Wallet Profiler Tab](/assets/pictures/eternl_analytics_wallet_profiler2.jpg)

* **Address Input & Hotlinks:** Enter an address/handle manually, select from contacts, choose an internal account, or scan a QR code. Click Add to hotlinks (star icon) to pin the wallet as a quick-access button at the top bar.

* **Overview Bar:** Highlights key account metrics including Total Value, Liquid Value, Token count, NFT count, and associated ADA Handles.

* **Detailed Breakdown:** Features dedicated tabs for **Holdings** (token balances, prices, and values), **Liquidity Pools** positions, and recent **Trade History**.


## Multichart

The Multichart tab allows you to monitor price action for multiple Cardano tokens simultaneously in a side-by-side grid layout.

![Eternl Analytics - Multichart Tab](/assets/pictures/eternl_analytics_multichart.jpg)

* **Adding Chart Tiles:** Search for a token in the top search bar and select it from the list to add a new chart tile to your screen. You can repeat this process to view multiple token charts at the same time.

* **Global & Chart Settings:** Customize chart default colors, overlay indicators, and RSI thresholds globally using the main gear icon in the top-right corner, or adjust settings per individual chart tile.

* **Timeframes & Technical Indicators:** Set individual timeframes (1D to 1Y) for each tile and toggle indicators including Moving Averages (MA/EMA), RSI, MACD, and Bollinger Bands (BB).

### Tile Controls & Customization

Each chart tile features its own toolbar for individual fine-tuning.

![Eternl Multichart Tile Interface](/assets/pictures/eternl_analytics_multichart_tile.jpg)

* **Candle Interval:** Select the timeframe represented by each candlestick (e.g., 5m, 1h, 1D).
* **Technical Indicators:** Quick-toggle overlay indicators directly on the chart.
* **Refresh Chart:** Reload data for the specific tile.
* **Tile Settings:** Opens the individual customization menu:
    * **Candle colors:** Set custom display colors for bullish (Up) and bearish (Down) candles.
    * **MA / EMA overlays:** Click **+ add overlay** to add Moving Averages (MA) or Exponential Moving Averages (EMA), set custom day periods (e.g., 20 days), and assign line colors.
    * **RSI thresholds:** Adjust the **Oversold** (default: 30) and **Overbought** (default: 70) limits.
* **Remove Tile:** Close and remove the chart tile from your grid.
* **Timeframe Selector:** Switch the visible time range (1D to 1Y).
