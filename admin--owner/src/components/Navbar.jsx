import React from 'react'
import {assets} from '../assets/admin_assets/assets.js'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between bg-[#121212]'>
        <img className='w-[max(17%,80px)] rounded-xl' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className='hover:bg-[#DC2626] bg-[#EF4444] hover:text-[#FFFFFF] transition-all duration-500 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar