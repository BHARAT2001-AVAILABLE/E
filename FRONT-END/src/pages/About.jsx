import React from 'react'
import Title from '../components/Title.jsx'
import { assets } from '../assets/assets/frontend_assets/assets.js'
import NewsLetterBox from '../components/NewsLetterBox.jsx'
const About = () => {
  return (
    <div>
       
       <div className='text-2xl text-center pt-8 border-t border-[#FACC15]'>
          <Title text1={'ABOUT'} text2={'US'}/>
       </div>

       <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px] rounded-sm ' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
             <p className='text-[#CBD5E1]'>Trendify is a leading e-commerce platform specializing in trendy and high-quality clothing for men, women, and kids. We offer a wide range of stylish apparel, ensuring comfort, elegance, and affordability for every fashion enthusiast. Our collections are designed to suit all occasions, from casual wear to formal attire.</p>
             <p className='text-[#CBD5E1]'>Shopping with Trendify is seamless and enjoyable. Our user-friendly website provides a smooth browsing experience, making it easy to find your favorite fashion pieces. We offer secure payment options, ensuring a safe and reliable transaction process. Plus, with our fast delivery service, your orders reach you quickly and hassle-free.</p>
             <p className='text-[#CBD5E1]'>At Trendify, customer satisfaction is our priority. We provide 24/7 customer support to assist with inquiries, returns, and orders. Stay updated with our exclusive deals, discounts, and seasonal sales. Shop now and redefine your style with trendify!</p>
             <b className='text-[#F8FAFC]'>Our Mission</b>
             <p className='text-[#CBD5E1]'>At Trendify, our mission is to redefine fashion by offering trendy, high-quality clothing for all. We prioritize affordability, convenience, and exceptional service, ensuring a seamless and enjoyable shopping experience for every customer.</p>
          </div> 
       </div>
         <div className='text-xl py-4'>
             <Title text1={'WHY'} text2={'CHOOSE US'}/>
         </div>
         <div className='flex flex-col md:flex-row text-sm mb-20 bg-[#1E293B]'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-[#334155]'>
               <b className='text-[#F8FAFC]'>Quality Assurance:</b>
               <p className='text-[#CBD5E1]'>We ensure top-quality products through strict quality checks, guaranteeing durability, style, and customer satisfaction.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-[#334155]'>
               <b className='text-[#F8FAFC]'>Convenience:</b>
               <p className='text-[#CBD5E1]'>We provide a seamless shopping experience with easy navigation, secure payments, fast delivery, and hassle-free returns.</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-[#334155]'>
               <b className='text-[#F8FAFC]'>Exceptional Customer Service:</b>
               <p className='text-[#CBD5E1]'>We prioritize customer satisfaction with 24/7 support, quick responses, hassle-free returns, and a seamless shopping experience.</p>
            </div>
         </div>

         <NewsLetterBox/>
    </div>
  )
}

export default About