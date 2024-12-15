'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import WalletModal from "@/components/wallet-modal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, CreditCard, Coins, ArrowRightLeft, BarChart3, Settings, LogOut } from 'lucide-react'


export default function DashboardPage() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)

  const wallets = [
    { name: 'Coinbase', icon: '/placeholder.svg?height=40&width=40' },
    { name: 'MetaMask', icon: '/placeholder.svg?height=40&width=40' },
    { name: 'WalletConnect', icon: '/placeholder.svg?height=40&width=40' },
    { name: 'Phantom', icon: '/placeholder.svg?height=40&width=40' },
    { name: 'Trust Wallet', icon: '/placeholder.svg?height=40&width=40' },
    { name: 'Ledger', icon: '/placeholder.svg?height=40&width=40' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen p-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg" />
            <span className="font-bold text-xl">Zephyr</span>
          </div>
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Wallet className="mr-2 h-4 w-4" />
              Wallets
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <CreditCard className="mr-2 h-4 w-4" />
              Cards
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Coins className="mr-2 h-4 w-4" />
              Assets
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ArrowRightLeft className="mr-2 h-4 w-4" />
              Transactions
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart3 className="mr-2 h-4 w-4" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>
          <div className="absolute bottom-4">
            <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold mb-8">Connect Wallet</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                {wallets.map((wallet) => (
                  <Card 
                    key={wallet.name}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setIsWalletModalOpen(true)}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center gap-4">
                        <img
                          src={wallet.icon}
                          alt={wallet.name}
                          className="w-10 h-10"
                        />
                        <CardTitle className="text-center">{wallet.name}</CardTitle>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
          </div>
        </main>
      </div>

      <WalletModal 
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </div>
  )
}

