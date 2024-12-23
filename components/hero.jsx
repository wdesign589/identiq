import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative min-h-screen  overflow-hidden">

      {/* Navigation */}
      <nav className="container mx-auto px-2 md:px-6 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/icon.png"
            alt="Zephyr Logo"
            width={60}
            height={32}
            className="mr-2 md:mr-12"
          />
          <Image
                      src="/text2.png"
                      alt="text"
                      width={80}
                      height={32}
                      className=""
                    />
          <div className="hidden md:flex items-center gap-8">
            {/* <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/invest" className="text-gray-600 hover:text-gray-900">Invest</Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/company" className="text-gray-600 hover:text-gray-900">Company</Link> */}
          </div>
        </div>
        <div className='space-x-2 md:space-x-4 font-semibold'>
          <Link href={'/signup'}>
          <button className="text-darksec border-2  border-darksec px-3 md:px-6 py-2 rounded-full hover:bg-primary/90">
          Sign Up
        </button>
          </Link>
          
          <Link href={'/login'}>
          <button className="bg-darksec border-2 border-darksec text-white px-4 md:px-6 py-2 rounded-full hover:bg-primary/90">
          Login
        </button>
          </Link>
        
        </div>
        
      </nav>

      {/* Hero Content */}
      <div className=" mx-auto px-6 pt-1 md:pt-20 pb-32 bg-[url('/bg4.jpg')]  bg-cover bg-no-repeat bg-center ">
        <div className="max-w-3xl mx-auto text-center mb-12 z-20">
          <h1 className="text-5xl font-bold leading-tight mb-6 z-20">
          Universal Crypto Verification Made Simple
          </h1>
          <p className="text-lg text-gray-600 mb-8 z-20">
          Complete your wallet verification instantly with Identiq's universal verification system. Ensure your identity, secure your transactions, and access crypto services globally — all from a single, trusted platform.
          </p>
          <Link href={'/signup'}>
          <button className="bg-darksec text-white px-8 py-3 rounded-full hover:bg-gray-800">
          Get Verified Now
          </button>
          </Link>
          
        </div>

        {/* Dashboard Preview */}
        <div className="relative z-10">
          <Image
            src="/hero.png"
            alt="Dashboard Preview"
            width={1000}
            height={600}
            className="rounded-lg shadow-2xl mx-auto bg-white"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-10 hidden lg:block">
          <Image
            src="/ltc.png"
            alt="Bitcoin Icon"
            width={60}
            height={60}
            className="animate-float"
          />
        </div>
        <div className="absolute top-80 left-28 hidden lg:block">
          <Image
            src="/doge.png"
            alt="Bitcoin Icon"
            width={60}
            height={60}
            className="animate-float"
          />
        </div>
        <div className="absolute top-40 right-10 hidden lg:block">
          <Image
            src="/btc.png"
            alt="Token Icon"
            width={60}
            height={60}
            className="animate-float-delayed"
          />
        </div>
        <div className="absolute top-80 right-36 hidden lg:block">
          <Image
            src="/sol.png"
            alt="Token Icon"
            width={70}
            height={60}
            className="animate-float-delayed"
          />
        </div>
        <div className="absolute top-[450px] right-8 hidden lg:block">
          <Image
            src="/eth.png"
            alt="Ethereum Icon"
            width={100}
            height={100}
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

