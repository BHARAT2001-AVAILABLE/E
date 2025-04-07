import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='max-w-xs mx-auto overflow-hidden border-[#475569] border-[3px] rounded-sm  '>
        <div className='relative'>
          <img className='grid grid-grid-cols hover:scale-110 transition ease-in-out duration-300 rounded-sm w-full h-64 object-cover md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6' src={image[0]} alt=''/>
          </div>
      </div>
      <p className='pt-3 pb-1 text-sm text-[#E2E8F0]'>{name}</p>
      <p className='text-sm font-medium  text-[#EF4444]'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem