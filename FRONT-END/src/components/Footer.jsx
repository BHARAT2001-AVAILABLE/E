import React from 'react'
import {assets} from '../assets/assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div  className='text-[#F8FAFC]'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
           <div>
              <img src={assets.logo} className='w-[270px] rounded-xl' alt="" />
              <br/>
              <p className='w-full md:w-2/3 text-[#CBD5E1]'>
              Explore the latest fashion trends at our online clothing store. Enjoy secure payments, fast delivery, and easy returns. Follow us on social media for updates. 
              </p>
           </div>

           <div>
              <p className='text-xl font-medium mb-5'>COMPANY</p>
              <ul className='flex flex-col gap-1 text-[#CBD5E1]'>
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Delivery</li>
                 <li>Privacy Policy</li>
              </ul>
           </div>

            <div>
              <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
              <ul className='flex flex-col gap-1 text-[#CBD5E1]'>
                 <li>+91-987654321</li>
                 <li>contact.us@trendify.com</li>
              </ul>
            </div>
            
        </div>

        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@trendify.com - All Right reserved</p>
        </div>
    </div>
  )
}

export default Footer