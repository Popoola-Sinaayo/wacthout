import React, { useState } from 'react'
import ContactModal from './ContactModal';
import Logo from "../assets/Logo.svg";

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
      <img className='max-sm:w-32' src={Logo} alt="logo" />
      <button className='border-2 border-black rounded-full px-5 py-2' onClick={openModal}>Contact us</button>
      <ContactModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  )
}

export default Navbar;