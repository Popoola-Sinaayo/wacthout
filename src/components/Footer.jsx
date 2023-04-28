import React from 'react';
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <div className='mb-[3.75rem]'>
      <hr className='mb-10 border border-black' />
      <img src={Logo} alt="logo" />
    </div>
  )
}

export default Footer;