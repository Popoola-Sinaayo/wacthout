import React, { useState } from 'react';
import HeroImg from "../assets/hero.svg";
import ContactModal from './ContactModal';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between mt-[4.5rem]'>
      <div className='mt-10 md:mt-12 lg:mt-0'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-[3.875rem] font-bold leading-[2.5rem] md:leading-[4rem] lg:leading-[4.5rem]'>Security <br /> Management <br /> made simple </h1>
        <p className='w-[90%] lg:w-[70%] xl:w-[65%] mt-5 mb-10'>Our security guard agency app offers a comprehensive platform for managing client contracts, guard assignments, and real-time incident reporting Increase efficiency and transparency in your security operations with our easy-to-use app.</p>
        <button className='bg-gradient-to-r from-[#00A695] to-[#1D4F9A] text-white rounded-lg px-[4.375rem] py-3.5' onClick={openModal}>Book a Demo</button>
      </div>
      <div>
        <img src={HeroImg} alt="hero image" />
      </div>
      <ContactModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

export default Hero;