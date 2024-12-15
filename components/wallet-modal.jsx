'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from 'lucide-react'
import Image from "next/image"

export default function WalletModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Connecting with Coinbase Wallet</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-md"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription>
            Select what network and wallet you want to connect below
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Source Wallet"
              width={32}
              height={32}
            />
          </div>
          <div className="w-8 h-8 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#666" />
            </svg>
          </div>
          <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="Target Wallet"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="api-key">API Key</Label>
            <Input
              id="api-key"
              placeholder="Enter API Key"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="submitter-id">Submitter ID</Label>
            <Input
              id="submitter-id"
              placeholder="Enter Submitter ID"
            />
          </div>
        </div>
        <Button className="w-full bg-primary">
          Connect wallet
        </Button>
        <div className="text-center text-sm text-gray-500 mt-4">
          By clicking to Allow access, you authorize Coinbase to use your information in accordance with its Privacy Policy.
        </div>
        <div className="text-center">
          <a href="#" className="text-primary text-sm hover:underline">
            Read documentation
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}

