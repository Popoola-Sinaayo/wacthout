import React from 'react'

const About = () => {
  return (
    <div className='my-[7.5rem] grid grid-cols-1 lg:grid-cols-3 gap-5'>
      <div className='bg-[#00A695] pt-8 pl-8 rounded-xl text-white'>
        <h2 className='text-[2rem] font-bold'>“Transforming security with automation”</h2>
        <p className='text-3xl text-[white] font-bold flex justify-end pb-6 pr-8 md:pt-8'>~ WatchOwl</p>
      </div>
      <div className='lg:col-span-2 p-8 rounded-xl'>
        <h2 className='text-2xl font-medium mb-5'>About us</h2>
        <p>We at watchowl, are aiming to disrupt the traditional security agency system. Our cutting edge platform automates process, improve security guard performance, and provides real time monitoring. We offer customized solutions to meet unique security needs of each client and secure while saving you time and money</p>
      </div>
    </div>
  )
}

export default About;