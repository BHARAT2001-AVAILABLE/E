import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler=(event)=>{
        event.preventDefault();

    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-[#EF4444] mt-3'>Subscribe today and unlock an exclusive 20% discount on your first order. Don’t miss this limited-time special offer!</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-[#FACC15] pl-3 rounded-sm'>
            <input className='w-full sm:flex-1 outline-none rounded-sm bg-[#1E293B] text-[#FACC15]' type='email' placeholder='Enter your email'/>
            <button type='submit' className=' text-slate-600 hover:bg-[#EAB308] bg-[#FACC15] hover:text-[#0F172A] transition-all duration-500 text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox