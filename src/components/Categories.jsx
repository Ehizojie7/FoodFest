import React from 'react'
import { categories } from '../data'

function Categories() {
  return (
    <div className='max-w-[1640px] grid grid-cols-2 mx-auto lg:grid-cols-4'>
        <h1>Top Rated Category</h1>
        {categories.map((item)=>(
            <div key={item.id} className='bg-gray-200 rounded-lg m-4 p-4 text-center hover:scale-105 duration-300'>
                <h2 className='font-bold'>{item.name}</h2>
                <img src={item.image} alt={item.name} className='w-20' />
            </div>
        ))}
    </div>
  )
}

export default Categories