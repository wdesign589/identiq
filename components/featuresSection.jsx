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
            <LockIcon className="w-6 h-6 text-logo" />
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
            <ShieldIcon className="w-6 h-6 text-logo" />
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
            <SearchIcon className="w-6 h-6 text-logo" />
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

        <div className="bg-gray-50 rounded-3xl px-2 md:p-6">
          <h3 className="text-2xl font-bold text-center mb-6">
            Choose the best stock<br />to purchase right now
          </h3>

          <div className="flex gap-2 mb-6 items-center justify-center">
            <button className="bg-primary text-white px-6 py-2 rounded-full">Buy</button>
            <button className="text-gray-600 px-6 py-2">Sell</button>
            <button className="text-gray-600 px-6 py-2">Convert</button>
          </div>

          <div className="space-y-3 flex items-center justify-center w-full">
           <img src="/table2.png" className='w-full block md:hidden' alt="" />
           <img src="/table.png" className='w-full hidden md:block' alt="" />
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

