import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from '../components/Title.jsx';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token , currency }=useContext(ShopContext);
  const [orderData,setOrderData] =useState([])

  const loadOrderData= async () => {
    try {
      if (!token) {
        return null 
      }

      const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)             
          })
        })
        setOrderData(allOrdersItem.reverse())
        
      }
      
    } catch (error) {
      console.log(error)
      
    }
  }

   useEffect(()=>{
  loadOrderData()
   },[token])

  return (
   
    <div className='border-t pt-16'>
       
       <div className='text-2xl'>
           <Title text1={'MY'} text2={'ORDERS'}/>
       </div>

       <div>
          {
             orderData.map((item,index)=>(
              <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                     <div className='flex items-start gap-6 text-sm'>
                     <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                     <div>
                        <p className='sm:text-base font-medium text-[#F8FAFC]'>{item.name}</p>
                        <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                          <p className='text-green-300 '>{currency}{item.price}</p>
                          <p className='text-blue-400'>Quantity: {item.quantity}</p>
                          <p className='text-yellow-300'>Size: {item.size}</p>
                        </div>
                        <p className='mt-1 text-slate-300'>Date: <span className='text-[#FACC15]'>{new Date(item.date).toDateString()}</span></p>
                        <p className='mt-1 text-emerald-400'>Payment: <span className='text-[#FACC15]'>{item.paymentMethod}</span></p>
                     </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                  <div className='flex items-center gap-2'>
                      <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                      <p className='text-sm text md:text-base text-[#22C55E]'>{item.status}</p>
                  </div>
                  <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium text-[#F8FAFC] hover:bg-[#60A5FA] bg-[#3B82F6] hover:text-[#0F172A] transition-all duration-500 rounded-sm '>Track Order</button>
               </div>
            </div>
             ))
          }
       </div>
    </div>
    
  )
}

export default Orders