import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative min-h-screen bg- from-main via-white  to-sec overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=32&width=120"
            alt="Zephyr Logo"
            width={120}
            height={32}
            className="mr-12"
          />
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/invest" className="text-gray-600 hover:text-gray-900">Invest</Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/company" className="text-gray-600 hover:text-gray-900">Company</Link>
          </div>
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90">
          Try now
        </button>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Global and Flexible Payment Solution
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            With the Zephyr platform, you can now invest in equities or cryptocurrencies with all the conveniences of online and dashboard trading.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800">
            Get Started
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          <Image
            src="/placeholder.svg?height=600&width=1000"
            alt="Dashboard Preview"
            width={1000}
            height={600}
            className="rounded-lg shadow-2xl mx-auto"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10">
          <Image
            src="/placeholder.svg?height=60&width=60"
            alt="Bitcoin Icon"
            width={60}
            height={60}
            className="animate-float"
          />
        </div>
        <div className="absolute top-40 right-10">
          <Image
            src="/placeholder.svg?height=60&width=60"
            alt="Token Icon"
            width={60}
            height={60}
            className="animate-float-delayed"
          />
        </div>
        <div className="absolute bottom-40 left-20">
          <Image
            src="/placeholder.svg?height=60&width=60"
            alt="Ethereum Icon"
            width={60}
            height={60}
            className="animate-float"
          />
        </div>
        <div className="absolute bottom-60 right-20">
          <Image
            src="/placeholder.svg?height=60&width=60"
            alt="Chart Icon"
            width={60}
            height={60}
            className="animate-float-delayed"
          />
        </div>
      </div>
    </div>
  )
}

