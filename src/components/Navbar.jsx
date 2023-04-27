import React, { useState } from 'react'
import ContactModal from './ContactModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <div className='flex items-center justify-between mt-5'>
      <h1 className='text-[2.375rem] font-bold bg-[#F6F6F6] px-14 py-1'>Logo</h1>
      <button className='border-2 border-black rounded-full px-5 py-2' onClick={openModal}>Contact us</button>
      <ContactModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

export default Navbar;