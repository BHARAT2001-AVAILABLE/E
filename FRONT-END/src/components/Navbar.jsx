import React,{useState,useContext} from 'react'
import  {assets}  from '../assets/assets/frontend_assets/assets'
import {Link,NavLink} from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';


   
const Navbar = () => {
  const [visible,setVisible]=useState(false);
  const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);
  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }
  return (
    <div>
      <div className='flex items-center justify-between py-5 font-medium'> 
       <Link to={'/'}> <img src={assets.logo} className='w-[270px] rounded-xl' alt="" /> </Link>
        <ul className='hidden sm:flex gap-5 text-sm text-[#FACC15] '>
           <NavLink to='/' className="flex flex-col items-center gap-1 hi">
             <p>HOME</p>
             <hr className='w-2/4 border-none h-[1.5px] bg-[#FACC15] hidden'/>
           </NavLink>
           <NavLink to='/collection' className="flex flex-col items-center gap-1">
             <p>COLLECTION</p>
             <hr className='w-2/4 border-none h-[1.5px] bg-[#FACC15] hidden'/>
           </NavLink>
           <NavLink to='/about' className="flex flex-col items-center gap-1">
             <p>ABOUT</p>
             <hr className='w-2/4 border-none h-[1.5px] bg-[#FACC15] hidden' />
           </NavLink>
           <NavLink to='/contact' className="flex flex-col items-center gap-1">
             <p>CONTACT</p>
             <hr className='w-2/4 border-none h-[1.5px] bg-[#FACC15] hidden' />
           </NavLink>
        </ul>
        <div className="flex items-center gap-6">
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer'  alt="" />
            <div className="group relative">
                   <img src={()=> token ? null : navigate(('/login'))} alt="" /><img className='w-5 cursor-pointer transition ease-in-out duration-300' src={assets.profile_icon} alt="" />
                  {/* Dropdown Menu */}
                  {token &&                   
                  <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 transition ease-in-out duration-300'>
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-[#1E293B] text-[#FEF3C7] rounded">
                      <p className='cursor-pointer hover:text-[#EAB308]'>My Profile</p>
                      <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-[#EAB308]'>Orders</p>
                      <p onClick={logout} className='cursor-pointer hover:text-[#EAB308]'>Logout</p>
                    </div>
                  </div>}
            </div>
            <Link to='/cart' className='relative'>
             <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
             <p className='absolute right-[-4px] bottom-[2px] w-4 text-center leading-4 bg-[#EF4444] text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
             <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
          </Link>
          
        </div> 
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt=""/>
         {/* Slidebar menu for small screens */}
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden hover:bg-[#334155] bg-[#1E293B] hover:text-[#CBD5E1]  transition-all duration-500 rounded-sm ${visible?'w-full':'w-0'}`}>
               <div className='flex flex-col text-[#CBD5E1]'>
                   <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt=""/>
                        <p>Back</p>
                   </div>
                   <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[#1E293B]' to='/'>HOME</NavLink>
                   <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[#1E293B]' to='/collection'>COLLECTION</NavLink>
                   <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[#1E293B]' to='/about'>ABOUT</NavLink>
                   <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border border-[#1E293B]' to='/contact'>CONTACT</NavLink>
               </div>
         </div>

      </div>
      </div>
   
  )
}

export default Navbar

