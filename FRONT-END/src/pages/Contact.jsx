import React from 'react'
import Title from '../components/Title.jsx'
import { assets } from '../assets/assets/frontend_assets/assets.js'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t border-[#FACC15]'>
        <Title text1={"CONTACT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
         <img className='w-full md:max-w-[400px] rounded-sm' src={assets.contact_img} alt="" />
         <div className='flex flex-col justify-center items-start gap-6'>
           <p className='font-semibold text-xl text-[#F8FAFC]'>Our Store</p>
           <p className='text-[#CBD5E1]'>123 Fashion Street, Suite 456<br />Downtown City, State 78910</p>
           <p className='text-[#CBD5E1]'>Phone: +91 (123) 456-7890<br/>Email: support@trendify.com</p>
           <p className='font-semibold text-xl text-[#F8FAFC]'>careers at Forever</p>
           <p className='text-[#CBD5E1]'>Learn more about our teams and job openings.</p>
           <button className='border border-black px-8 py-4 text-sm text-slate-600 hover:bg-[#F472B6] bg-[#EC4899] hover:text-[#F8FAFC] transition-all duration-500 rounded-sm'>Explore Jobs</button>
         </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact