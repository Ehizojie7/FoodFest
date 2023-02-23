import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {useState} from 'react'
import React from 'react'


function Navbar() {
  const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'> 
    <div className='flex items-center gap-4'>
        <div className='cursor-pointer' onClick={()=>{setNav(!nav)}}>
            <AiOutlineMenu onClick={()=> {setNav(!nav)}} size={30} />
        </div>
        <h1 className='text-2xl sm:text-3l lg:text-4xl text-red-900'>Food<span className='text-2xl sm:txt-3l lg:text-4xl text-green-400'>Fest</span></h1>
        
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full mr-2 p-2 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Shop Now</p>
          <p className='p-2'>Pickup</p>
        </div>
    </div>

    {/* THE SEARCH INPUT */}
    <div className='bg-gray-300 rounded-full flex items-center px-2 w-[200] sm:w-[400] lg:w-[500]'>
      <AiOutlineSearch size={20} />
      <input type="text" placeholder='Search Food' className='bg-transparent p-2 focus:outline-none w-full' />
    </div>

    {/* THE CART BUTTON */}
  
    <button className='bg-black text-white hidden rounded-full md:hidden items-center py-2 px-4'><BsFillCartFill size={20} /> Cart</button>
    

    {/* MOBILE MENU OVERLAY*/}
    {/* { nav && <div className='bg-black fixed w-full h-screen z-10 top-0 left-0'></div>} */}

    {/* SIDE BAR MENU OR DRAWER MENU */}
    <div className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-gray-300 duration-300 z-10' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white duration-300'}>
      <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={()=>{setNav(!nav)}} />
      <h2 className='text-2xl sm:text-3l lg:text-4xl p-4 text-red-900'>Food<span className='text-2xl sm:text-3l lg:text-4xl text-green-900'>Fest</span></h2>
      <nav>
        <ul className='flex flex-col p-4 text-gray-800'>
          <li className='text-xl p-4 flex mr-4'><TbTruckDelivery size={20} /> Orders</li>
          <li className='text-xl p-4 flex mr-4'><MdFavorite size={20} /> Favorites</li>
          <li className='text-xl p-4 flex mr-4'><FaWallet size={20} /> Wallet</li>
          <li className='text-xl p-4 flex mr-4'><MdHelp size={20} /> Help</li>
          <li className='text-xl p-4 flex mr-4'><AiFillTag size={20} /> Promotions</li>
          <li className='text-xl p-4 flex mr-4'><BsFillSaveFill size={20} /> Best Ones</li>
          <li className='text-xl p-4 flex mr-4'><FaUserFriends size={20} /> Invite Friends</li>
        </ul>
      </nav>

    </div>

    </div>
  )
}

export default Navbar