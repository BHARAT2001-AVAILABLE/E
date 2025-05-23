import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
 
    const {currency,delivery_fee,getCartAmount}=useContext(ShopContext);
    

  return (
    <div className='w-full'>
        <div className='text-2xl'>
           <Title text1={'CART'} text2={'TOTALS'}/>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
           <div className='flex justify-between'>
                <p className='text-[#F8FAFC]'>SubTotal</p>
                <p className='text-[#CBD5E1]'>{currency}{getCartAmount()}.00</p>
           </div>
           <hr/>
           <div className='flex justify-between'>
             <p className='text-[#F8FAFC]'>Shipping Fee</p>
             <p className='text-[#94A3B8]'>{currency} {delivery_fee}.00</p>
           </div>
           <hr/>
           <div className='flex justify-between'>
              <b className='text-[#F8FAFC]'>Total</b>
              <b className='text-[#FACC15]'>{currency} {getCartAmount()==0 ? 0 : getCartAmount() + delivery_fee}.00</b>
           </div>
        </div>
    </div>
  )
}

export default CartTotal