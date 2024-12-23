import Image from 'next/image'

export default function ExperienceSection() {
  return (
    <>
     <section className="container mx-auto px-6 py-24 hidden md:block">
      {/* Main Features */}
      <div className='w-full'>
        <img src="/experience2.png" className="w-full m-0"alt="" />
      </div>

      {/* Security Section */}
      <div className='w-full'>
        <img src="/experience1.png" className="w-full m-0"alt="" />
      </div>
    </section>

    <section className="container mx-auto px-6 py-12 md:py-24 block md:hidden">
      {/* Main Features */}
      <div className='w-full'>
        <img src="/ex1a.png" className="w-full m-0"alt="" />
        <img src="/ex1b.png" className="w-full m-0"alt="" />
      </div>

      {/* Security Section */}
      <div className='w-full space-y-4'>
        <h1 className='text-base font-bold text-center pt-6'>A trusted leader in digital verification from the very start ensuring unmatched security and privacy</h1>
        <img src="/ex2b.png" className="w-full m-0"alt="" />
        <img src="/ex2a.png" className="w-full m-0"alt="" />
      </div>
    </section>
    </>
   
  )
}

