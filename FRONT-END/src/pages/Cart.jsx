import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from '../components/Title.jsx'; 
import { assets } from '../assets/assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal.jsx';

const Cart = () => {

  const { products,currency,cartItems,updateQuantity,navigate } =useContext(ShopContext);

  const [cartData,setCartData]=useState([]);
   useEffect(()=>{

   if (products.length>0) {
        const tempData=[];
        for(const items in cartItems){
        for(const item in cartItems[items]){
          if (cartItems[items][item]>0){
            tempData.push({
              _id: items,
              size:item,
              quantity: cartItems[items][item]
            })
          }
        }
        }
        setCartData(tempData);    
   }   
   },[cartItems,products])
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
          <Title text1={'YOURS'} text2={'CART'}/>
      </div>

      <div>
        {
          cartData.map((item,index)=>{

            const productData = products.find((product)=> product._id === item._id);

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                 <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                  <p className='text-xs sm:text-lg font-medium text-[#F8FAFC]'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                     <p className='text-[#EF4444]'>{currency}{productData.price}</p>
                     <p className='px-2 sm:px-3 sm:py-1 border bg-[#22C55E] text-[#F8FAFC]'>{item.size}</p>
                  </div>
                  </div>
                 </div>
                 <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-[#F8FAFC] hover:bg-[#60A5FA] bg-[#3B82F6] hover:text-[#0F172A] transition-all duration-500 rounded-sm' type='number' min={1} defaultValue={item.quantity} />
                 <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
              </div>

            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
             <button onClick={()=>navigate('/place-order')} className='hover:bg-[#DC2626] bg-[#EF4444] hover:text-[#FFFFFF] transition-all duration-500 rounded-sm text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart