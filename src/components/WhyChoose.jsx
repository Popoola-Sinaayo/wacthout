import React from 'react';
import whyChoose from '../mockData/whyChoose';

const WhyChoose = () => {
  return (
    <div className='mb-40 mt-24'>
      <div className='mb-[7.5rem] flex flex-col md:flex-row text-center md:text-start justify-between md:gap-10'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-7'>Why should an agency choose us</h1>
        <p className='w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto'>Our security guard agency app offers a comprehensive platform for managing client contracts, guard assignments, and real-time incident reporting. Increase efficiency and transparency in your security operations with our easy-to-use app.</p>
      </div>

      <div className='grid grid-cols-12 gap-10'>
        {
          whyChoose.map((choose) => (
            <div className={`bg-gradient-to-r from-[#F8F8F8] to-[#EFEFEF] rounded-xl p-6 ${choose.id < 4 ? 'col-span-12 md:col-span-6 xl:col-span-4' : ''} ${choose.id === 4 && 'col-span-12 md:col-span-6 xl:col-span-4 xl:col-start-3'} ${choose.id === 5 && 'col-span-12 md:col-span-6 xl:col-span-4 md:col-start-4 xl:col-start-7'}`} key={choose.id}>
              <div>
                <h2 className='text-2xl font-medium'>{choose.number}</h2>
                <h2 className='text-[2rem] font-bold mt-2 mb-5'>{choose.title}</h2>
                <img src={choose.img} alt="why choose img" />
                <p>{choose.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WhyChoose;