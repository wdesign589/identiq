"use client"

import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'

export default function FeaturesSection() {
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id)
  }

  return (
    <section className="container mx-auto px-6 py-24">
      {/* Trust Features */}
      <h2 className="text-4xl font-bold mb-16 max-w-md">
        The cryptocurrency platform with the highest level of trust
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6 mb-24">
        <div className="bg-gray-50 p-8 rounded-2xl">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <LockIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-3">Secure Storage</h3>
          <p className="text-gray-600 text-sm mb-4">
            We keep the majority of our digital assets offline for safety reasons.
          </p>
          <a href="#" className="text-primary text-sm font-medium inline-flex items-center">
            Learn more
            <ArrowIcon className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <ShieldIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-3">Protected by Insurance</h3>
          <p className="text-gray-600 text-sm mb-4">
            Up to a $250,000 maximum. Insurance is available for all USD cash amounts.
          </p>
          <a href="#" className="text-primary text-sm font-medium inline-flex items-center">
            Learn more
            <ArrowIcon className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <SearchIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-3">Secure Storage</h3>
          <p className="text-gray-600 text-sm mb-4">
            A wide range of the most widely used digital currencies are supported by CoinBase
          </p>
          <a href="#" className="text-primary text-sm font-medium inline-flex items-center">
            Learn more
            <ArrowIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>

      {/* Trading Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
            How to trade cryptocurrency in a busy manner
          </h2>

          <div className="border-b border-gray-200">
            <button 
              className="flex items-center justify-between w-full py-4 text-left"
              onClick={() => toggleDropdown('expert')}
            >
              <span className="font-medium">Expert availability and accessibility</span>
              <ChevronDownIcon className={`w-5 h-5 text-gray-500 transform transition-transform ${openDropdown === 'expert' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'expert' && (
              <div className="pb-4 text-sm text-gray-600">
                Our platform provides 24/7 access to expert advice and support, ensuring you have the guidance you need whenever you need it.
              </div>
            )}
          </div>

          <div className="border-b border-gray-200">
            <button 
              className="flex items-center justify-between w-full py-4 text-left"
              onClick={() => toggleDropdown('apis')}
            >
              <span className="font-medium">An assortment of strong apis</span>
              <ChevronDownIcon className={`w-5 h-5 text-gray-500 transform transition-transform ${openDropdown === 'apis' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'apis' && (
              <div className="pb-4 text-sm text-gray-600">
                We offer both individuals and institutions premier access to cryptocurrency trading with consistent uptime, robust order execution, and high liquidity.
              </div>
            )}
          </div>

          <div className="border-b border-gray-200">
            <button 
              className="flex items-center justify-between w-full py-4 text-left"
              onClick={() => toggleDropdown('assistance')}
            >
              <span className="font-medium">Assistance to the clients</span>
              <ChevronDownIcon className={`w-5 h-5 text-gray-500 transform transition-transform ${openDropdown === 'assistance' ? 'rotate-180' : ''}`} />
            </button>
            {openDropdown === 'assistance' && (
              <div className="pb-4 text-sm text-gray-600">
                Our dedicated customer support team is always ready to assist you with any queries or issues you may encounter during your trading journey.
              </div>
            )}
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-6">
          <h3 className="text-2xl font-bold text-center mb-6">
            Choose the best stock<br />to purchase right now
          </h3>

          <div className="flex gap-2 mb-6">
            <button className="bg-primary text-white px-6 py-2 rounded-full">Buy</button>
            <button className="text-gray-600 px-6 py-2">Sell</button>
            <button className="text-gray-600 px-6 py-2">Convert</button>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-5 text-sm text-gray-500 px-4 py-2">
              <span>Name</span>
              <span>Price</span>
              <span>Change</span>
              <span>Market Cap</span>
              <span></span>
            </div>

            {cryptoData.map((crypto) => (
              <div key={crypto.name} className="grid grid-cols-5 items-center bg-white rounded-xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <img src={crypto.icon} alt={crypto.name} className="w-6 h-6" />
                  <span className="font-medium">{crypto.name}</span>
                  <span className="text-gray-500 text-sm">{crypto.symbol}</span>
                </div>
                <span>${crypto.price}</span>
                <span className={crypto.change > 0 ? 'text-green-500' : 'text-red-500'}>
                  {crypto.change > 0 ? '+' : ''}{crypto.change}%
                </span>
                <span>${crypto.marketCap}B</span>
                <button className="bg-gray-100 text-primary px-4 py-1 rounded-full justify-self-end">
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Icons components
function LockIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  )
}

function ShieldIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function SearchIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  )
}

function ArrowIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

// Sample crypto data
const cryptoData = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '37,735.39',
    change: 36.12,
    marketCap: '375.01',
    icon: '/placeholder.svg?height=24&width=24'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '25,482.0',
    change: 27.64,
    marketCap: '202.97',
    icon: '/placeholder.svg?height=24&width=24'
  },
  {
    name: 'Avalanche',
    symbol: 'AVAX',
    price: '6,872.15',
    change: -27.69,
    marketCap: '775.35',
    icon: '/placeholder.svg?height=24&width=24'
  },
  {
    name: 'Toncoin',
    symbol: 'TON',
    price: '13,762.22',
    change: 50.85,
    marketCap: '495.01',
    icon: '/placeholder.svg?height=24&width=24'
  },
  {
    name: 'Polkadot',
    symbol: 'DOT',
    price: '8,734.39',
    change: -27.74,
    marketCap: '765.01',
    icon: '/placeholder.svg?height=24&width=24'
  },
  {
    name: 'Bitcoin Cash',
    symbol: 'BCH',
    price: '2,24.62',
    change: -7.45,
    marketCap: '232.43',
    icon: '/placeholder.svg?height=24&width=24'
  }
]

