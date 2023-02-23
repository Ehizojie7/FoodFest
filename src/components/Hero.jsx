import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[700px] relative'>
            {/*     OVERLAY */}
            <div className='absolute w-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>
                <h1 className='px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>THE <span className='text-orange-400'>BEST</span></h1>
                <h1 className='px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'><span className='text-orange-400'>FOOD</span> SERVICE</h1>
            </div>
            <img src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-full max-h-[500px] object-cover' alt="A burger" />

        </div>

    </div>
  )
}

export default Hero