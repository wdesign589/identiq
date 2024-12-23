'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false);
  const [stateError, setStateError] = useState(null);
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data.session != null) {
        console.log(data.session.user);
        const userId = data.session.user.id;

        if (userId) {
          if(userId == "199120a0-7091-4e36-8271-8f2fa278679e"){
            router.push("/dashboard/admin");
          }else{
          const { data, error } = await supabase
            .from("profiles")
            .select()
            .eq("id", userId);

          if (data) {
            console.log(typeof data.length);
            if (data.length != 0) {
              router.push("/dashboard");
            }
          }else{
            
          }
          }
        }
      }
    };
    getSession();
  }, []);



  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here 
  }

  const handleClick = async () => {
    setLoading(true);
    setStateError("");
    console.log(session);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error == null) {
      if(data){
         if(data.user.id == "199120a0-7091-4e36-8271-8f2fa278679e"){
        router.push("/dashboard/admin");
      }else{
      router.push("/dashboard");
      }
      }
     
    }else{
      console.log(email)
      console.log(password)
      setLoading(false);
      setStateError(error.message);
    console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
           <div className="w-full flex justify-center items-center my-5">
            <Image
              src="/icon.png"
              alt="Logo"
              width={60}
              height={60}
              className="animate-float"
            />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>
            Welcome back! Please enter your details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value.toLowerCase())}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value.toLowerCase())}
                required
              />
            </div>
            <div className="flex items-center justify-between">
             
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              onClick={handleClick}
              disabled={loading}
              className="w-full bg-primary"
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
            <p className="text-xs text-red-500">{stateError}</p>
            <div className="text-center text-sm text-gray-500">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-primary hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

