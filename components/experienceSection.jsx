import Image from 'next/image'

export default function ExperienceSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      {/* Main Features */}
      <div className="mb-32">
        <h2 className="text-4xl font-bold mb-16 max-w-md">
          Feel the best experience with our features
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Financial Insights Card */}
          <div className="bg-gray-50 p-6 rounded-3xl">
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Financial insights<br />and goals</h3>
              <div className="text-3xl font-bold">$84,987.90</div>
            </div>
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Financial Chart"
              width={400}
              height={200}
              className="w-full"
            />
          </div>

          {/* Annual Reporting Card */}
          <div className="bg-gray-50 p-6 rounded-3xl">
            <h3 className="font-semibold mb-4">Powerful annual<br />reporting</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-2xl">
                <div className="text-sm text-gray-600 mb-1">Portfolio Value</div>
                <div className="text-2xl font-bold">$78.9K</div>
                <div className="text-sm text-gray-600">Net value: 35.7%</div>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <div className="text-sm text-gray-600 mb-1">$42K</div>
                <div className="text-sm text-gray-600">6 Investment, 2 Startups</div>
              </div>
              <div className="bg-white p-4 rounded-2xl">
                <div className="text-sm text-gray-600 mb-1">Total Investment</div>
                <div className="text-2xl font-bold">$8.94K</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div>
        <h2 className="text-4xl font-bold text-center mb-16 max-w-2xl mx-auto">
          An industry leader from the start when it comes to security
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Team Discussion"
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <div className="text-sm mb-2">Trading</div>
              <h3 className="text-xl font-semibold">
                Get a complete and accurate view of your customers fasted
              </h3>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid gap-4">
            <div className="bg-gray-50 p-6 rounded-3xl">
              <h3 className="font-semibold mb-3">Transactions</h3>
              <p className="text-gray-600 mb-4">
                Easily monitor stock transactions on Zephyr
              </p>
              <Image
                src="/placeholder.svg?height=100&width=400"
                alt="Transaction Interface"
                width={400}
                height={100}
                className="w-full rounded-xl"
              />
            </div>

            <div className="bg-gray-50 p-6 rounded-3xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold mb-3">Trade, Exchange, Stake &<br />more with all popular coins</h3>
                  <p className="text-gray-600">Over 250 Coins</p>
                </div>
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Happy Customer"
                  width={120}
                  height={120}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

