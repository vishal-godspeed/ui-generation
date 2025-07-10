import React, { useState } from 'react';

interface Token {
  symbol: string;
  name: string;
  logo: string;
  balance: string;
  price?: string;
  priceChange?: string;
  priceChangeDirection?: 'up' | 'down';
}

interface SwapModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokens?: Token[];
  onSwap?: (fromToken: Token, toToken: Token, fromAmount: string, toAmount: string) => void;
}

const defaultTokens: Token[] = [
  {
    symbol: 'USDT',
    name: 'Tether USD',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=029',
    balance: '65,783.55',
    price: '$1.00',
    priceChange: '0.01',
    priceChangeDirection: 'down'
  },
  {
    symbol: 'BNB',
    name: 'Binance Coin',
    logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=029',
    balance: '7.54',
    price: '$400.56',
    priceChange: '1.63',
    priceChangeDirection: 'up'
  },
  {
    symbol: 'DASH',
    name: 'Dash Coin',
    logo: 'https://cryptologos.cc/logos/dash-dash-logo.png?v=029',
    balance: '98.56'
  },
  {
    symbol: 'BCH',
    name: 'Bitcoin Cash',
    logo: 'https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=029',
    balance: '14.89'
  }
];

const SwapModal: React.FC<SwapModalProps> = ({
  isOpen,
  onClose,
  tokens = defaultTokens,
  onSwap = () => console.log('Swap executed')
}) => {
  const [fromToken, setFromToken] = useState<Token>(tokens[0]);
  const [toToken, setToToken] = useState<Token>(tokens[1]);
  const [fromAmount, setFromAmount] = useState('1,594.78');
  const [toAmount, setToAmount] = useState('3.78');
  const [showTokenSelect, setShowTokenSelect] = useState(false);
  const [tokenSelectType, setTokenSelectType] = useState<'from' | 'to'>('from');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTokenSelect = (token: Token) => {
    if (tokenSelectType === 'from') {
      setFromToken(token);
    } else {
      setToToken(token);
    }
    setShowTokenSelect(false);
  };

  const openTokenSelect = (type: 'from' | 'to') => {
    setTokenSelectType(type);
    setShowTokenSelect(true);
  };

  const swapTokens = () => {
    const tempToken = fromToken;
    const tempAmount = fromAmount;
    setFromToken(toToken);
    setFromAmount(toAmount);
    setToToken(tempToken);
    setToAmount(tempAmount);
  };

  const handleSwap = () => {
    onSwap(fromToken, toToken, fromAmount, toAmount);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#23232b] rounded-2xl shadow-lg w-full max-w-3xl p-6 flex flex-col md:flex-row gap-6" id="swap-modal">
        {/* Left: Swap Form */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-white text-2xl font-bold" data-swap-title>Swap</h2>
            <div className="flex gap-2" data-swap-actions>
              <button className="text-gray-400 hover:text-white">
                <span className="material-icons">settings</span>
              </button>
              <button className="text-gray-400 hover:text-white">
                <span className="material-icons">history</span>
              </button>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white"
                aria-label="Close modal"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="bg-[#18181c] rounded-xl p-4 mb-2" data-swap-from>
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-400 text-sm">From:</span>
              <span className="text-gray-400 text-xs">Balance: {fromToken.balance}</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                className="flex items-center gap-2 bg-[#23232b] px-3 py-2 rounded-lg text-white font-semibold"
                onClick={() => openTokenSelect('from')}
              >
                <img src={fromToken.logo} alt={fromToken.symbol} className="w-6 h-6 rounded-full" /> 
                {fromToken.symbol} 
                <span className="material-icons text-base">expand_more</span>
              </button>
              <input
                type="text"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="text-2xl text-white font-bold ml-auto bg-transparent text-right focus:outline-none"
              />
            </div>
            <div className="text-xs text-gray-500 ml-1 mt-1">{fromToken.name}</div>
          </div>
          
          <div className="flex justify-center -my-2" data-swap-swapicon>
            <button 
              className="bg-[#23232b] rounded-full p-2 border-4 border-[#18181c] flex items-center justify-center"
              onClick={swapTokens}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" 
                />
              </svg>
            </button>
          </div>
          
          <div className="bg-[#18181c] rounded-xl p-4 mb-2" data-swap-to>
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-400 text-sm">To:</span>
              <span className="text-gray-400 text-xs">Balance: {toToken.balance}</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                className="flex items-center gap-2 bg-[#23232b] px-3 py-2 rounded-lg text-white font-semibold"
                onClick={() => openTokenSelect('to')}
              >
                <img src={toToken.logo} alt={toToken.symbol} className="w-6 h-6 rounded-full" /> 
                {toToken.symbol} 
                <span className="material-icons text-base">expand_more</span>
              </button>
              <input
                type="text"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="text-2xl text-white font-bold ml-auto bg-transparent text-right focus:outline-none"
              />
            </div>
            <div className="text-xs text-gray-500 ml-1 mt-1">{toToken.name}</div>
          </div>
          
          <button 
            className="w-full mt-2 py-3 rounded-xl bg-[#5b5bf6] hover:bg-[#4343c7] text-white font-semibold text-lg transition" 
            data-swap-action
            onClick={handleSwap}
          >
            Swap
          </button>
        </div>
        
        {/* Right: Token Select & Wallet */}
        <div className="flex-1 flex flex-col gap-4">
          {showTokenSelect ? (
            <div className="bg-[#18181c] rounded-xl p-4 mb-2" data-swap-token-select>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white text-lg font-semibold">Select a Token</h3>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setShowTokenSelect(false)}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
              </div>
              <div className="relative mb-3">
                <input 
                  type="text" 
                  placeholder="Search name or mint address..." 
                  className="w-full bg-[#23232b] text-white rounded-lg px-4 py-2 focus:outline-none" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 absolute right-3 top-2 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </div>
              <div className="flex gap-2 mb-3 flex-wrap">
                {tokens.map((token) => (
                  <button 
                    key={token.symbol}
                    className="flex items-center gap-1 bg-[#23232b] px-3 py-1.5 rounded-lg text-white text-sm"
                    onClick={() => handleTokenSelect(token)}
                  >
                    <img src={token.logo} alt={token.symbol} className="w-4 h-4" /> {token.symbol}
                  </button>
                ))}
              </div>
              <div className="divide-y divide-[#23232b]">
                {tokens
                  .filter(token => 
                    token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    token.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((token) => (
                    <div 
                      key={token.symbol}
                      className="flex items-center justify-between py-2 cursor-pointer hover:bg-[#23232b] px-2 rounded"
                      onClick={() => handleTokenSelect(token)}
                    >
                      <div className="flex items-center gap-2">
                        <img src={token.logo} alt={token.symbol} className="w-6 h-6" /> 
                        <span className="text-white">{token.symbol}</span> 
                        <span className="text-gray-400 text-xs">({token.name})</span>
                      </div>
                      <span className="text-white font-semibold">{token.balance} {token.symbol}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          ) : (
            <>
              <div className="bg-[#18181c] rounded-xl p-4 mb-2" data-swap-wallet>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white text-base font-semibold">Connect your wallet to Origin Labs</h3>
                  <button className="text-gray-400 hover:text-white">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <button className="flex items-center gap-2 bg-[#23232b] px-3 py-2 rounded-lg text-white font-semibold">
                    <img src="https://cryptologos.cc/logos/metamask-fox-logo.png?v=029" alt="MetaMask" className="w-5 h-5" /> MetaMask
                  </button>
                  <button className="flex items-center gap-2 bg-[#23232b] px-3 py-2 rounded-lg text-white font-semibold">
                    <img src="https://cryptologos.cc/logos/walletconnect-logo.png?v=029" alt="WalletConnect" className="w-5 h-5" /> WalletConnect
                  </button>
                  <button className="flex items-center gap-2 bg-[#23232b] px-3 py-2 rounded-lg text-white font-semibold col-span-2">
                    <img src="https://cryptologos.cc/logos/coinbase-coin-logo.png?v=029" alt="Coinbase" className="w-5 h-5" /> Coinbase
                  </button>
                </div>
                <div className="text-xs text-gray-400 text-center">
                  New here? <a href="#" className="text-blue-500 underline">Get started on Origin Labs</a>
                </div>
              </div>
              
              <div className="bg-[#18181c] rounded-xl p-4 flex flex-col gap-2" data-swap-prices>
                {tokens.slice(0, 2).map((token) => (
                  token.price && (
                    <div key={token.symbol} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src={token.logo} alt={token.symbol} className="w-6 h-6" /> 
                        <span className="text-white font-semibold">{token.symbol}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-white font-semibold text-sm">{token.price}</span>
                        <span className={`text-xs ${token.priceChangeDirection === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                          24H: {token.priceChangeDirection === 'up' ? '+' : '-'}{token.priceChange}%
                        </span>
                      </div>
                      <svg width="60" height="24" viewBox="0 0 60 24">
                        <polyline 
                          points={token.priceChangeDirection === 'up' 
                            ? "0,12 10,14 20,13 30,17 40,15 50,20 60,18" 
                            : "0,20 10,18 20,19 30,15 40,17 50,10 60,12"
                          } 
                          fill="none" 
                          stroke={token.priceChangeDirection === 'up' ? "#4ade80" : "#f87171"} 
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  )
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwapModal;