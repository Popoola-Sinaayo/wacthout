import React from 'react';
import Avatar from "../assets/avatar.svg";

const Testimonial = () => {
  return (
    <div className='w-[70%] xl:w-[50%] mx-auto mb-40'>
      <h3 className='text-3xl md:text-4xl lg:text-[2rem] font-medium'>“The process of adding and allocating guards to site easier than never before”</h3>
      <div className='flex items-center mt-10'>
        <hr className='border border-black mr-5 w-60' />
        <div className='flex items-center'>
          <img src={Avatar} alt="avatar" />
          <div className='ml-5'>
            <h4 className='text-lg font-bold'>Name</h4>
            <p className='text-lg text-[#4E4E4E]'>Raftaar Security Services</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;