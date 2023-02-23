import React from 'react'

function CardComponent() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* CARDS */}
        <div className='rounded-xl relative'>
            {/* OVERLAY */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Order Your Favourite food</p>
                <p className='px-2'>Try It Today!</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 text-sm'>Read more!</button>
            </div>
            <img src="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=600" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' alt="small burger" />
        </div>

        <div className='rounded-xl relative'>
            {/* OVERLAY */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Order Your Favourite food</p>
                <p className='px-2'>Try It Today!</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 text-sm'>Read more!</button>
            </div>
            <img src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=600" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' alt="small burger" />
        </div>

        <div className='rounded-xl relative'>
            {/* OVERLAY */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Order Your Favourite food</p>
                <p className='px-2'>Try It Today!</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 text-sm'>Read more!</button>
            </div>
            <img src="https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&w=600" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' alt="small burger" />
        </div>

    </div>
  )
}

export default CardComponent