"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import WalletModal from "@/components/wallet-modal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wallet,
  CreditCard,
  Coins,
  ArrowRightLeft,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [active, setActive] = useState({ name: "", icon: "" });
  const router = useRouter();

  const wallets = [
    { name: "Coinbase", icon: "/coinbase.png" },
    { name: "MetaMask", icon: "/meta.png" },
    { name: "WalletConnect", icon: "/wallet.png" },
    { name: "Phantom", icon: "/phantom.png" },
    { name: "Trust Wallet", icon: "/trust.png" },
    { name: "Ledger", icon: "/ledger.png" },
    { name: "Exodus", icon: "/ex.png" },
    { name: "MyEtherWallet", icon: "/myether.png" },
    { name: "Atomic", icon: "/atomic.png" },
    { name: "Rainbow", icon: "/rainbow.png" },
    { name: "Trezor", icon: "/trezor.png" },
    { name: "Binance Chain", icon: "/bnb.png" },
  ];

  const [email, setEmail] = useState(null);
  const [user, setUser] = useState({
    name: null,
  });

  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (data.session) {
      setEmail(data.session.user.email);
      const id = data.session.user.id;
      console.log(data.session.user);
      getUserDetails(id);
    }
    if (data.session == null) {
      router.push("login");
    }
  };

  const getUserDetails = async (id) => {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", id);

    if (data) {
      console.log(data);
      setUser({
        name: data[0].full_name,
      });
      console.log(user.name);
    }
    if (error) console.log(error);
  };
  const logout = async () => {
    let { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("login");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 bg-[url('/bg4.jpg')]  bg-cover bg-center">
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/icon.png"
            alt="Zephyr Logo"
            width={60}
            height={32}
            className="mr-2"
          />

          <Image
            src="/text2.png"
            alt="text"
            width={80}
            height={32}
            className="mr-12"
          />
          
          <div className="hidden md:flex items-center gap-8">
            {/* <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/invest" className="text-gray-600 hover:text-gray-900">Invest</Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/company" className="text-gray-600 hover:text-gray-900">Company</Link> */}
          </div>
        </div>
        <div className="space-x-4 font-semibold">
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
           onClick={logout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-8">Connect Wallet</h1>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {wallets.map((wallet) => (
                <div
                  key={wallet.name}
                  className="cursor-pointer shadow-sm hover:shadow-lg transition-shadow bg-white rounded-3xl min-w-24 min-h-32 flex flex-col justify-center items-center"
                  onClick={() => {
                    setIsWalletModalOpen(true);
                    setActive({
                      name: wallet.name,
                      icon: wallet.icon,
                    });
                  }}
                >
                  <div className="">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <img
                        src={wallet.icon}
                        alt={wallet.name}
                        className="w-10 h-10"
                      />
                      <CardTitle className="text-center text-base font-semibold">
                        {wallet.name}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        active={active}
      />
    </div>
  );
}
