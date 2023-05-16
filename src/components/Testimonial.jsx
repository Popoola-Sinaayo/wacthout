import React from 'react';
import Avatar from "../assets/avatar.svg";
import TestimonialBgImg1 from "../assets/testimonial1.svg";
import TestimonialBgImg2 from "../assets/testimonial2.svg";

const Testimonial = () => {
  return (
    <div className='max-sm:w-full w-[70%] xl:w-[50%] mx-auto mb-40 flex items-center justify-start'>
      <div className='absolute'>
        <img className='w-80 h-80 absolute -top-16 right-36' src={TestimonialBgImg1} alt="" />
        <img className='w-80 h-80 relative right-10' src={TestimonialBgImg2} alt="" />
      </div>
      <div className='relative'>
        <h3 className='max-sm:w-full text-3xl md:text-4xl lg:text-[2rem] font-medium'>“The process of adding and allocating guards to site easier than never before”</h3>
        <div className='flex items-center mt-10'>
          <hr className='max-sm:hidden border border-black mr-5 w-60' />
          <div className='flex items-center'>
            <img src={Avatar} alt="avatar" />
            <div className='ml-5'>
              <h4 className='text-lg font-bold'>Name</h4>
              <p className='text-lg text-[#4E4E4E]'>Raftaar Security Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;