import React from 'react';
import whyChoose from '../mockData/whyChoose';

const WhyChoose = () => {
  return (
    <div className='mb-40'>
      <div className='text-center mb-[7.5rem]'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-7'>Why should an agency choose us</h1>
        <p className='w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto'>Our security guard agency app offers a comprehensive platform for managing client contracts, guard assignments, and real-time incident reporting. Increase efficiency and transparency in your security operations with our easy-to-use app.</p>
      </div>

      {
        whyChoose.map((choose) => (
          <div className={`flex flex-col lg:flex-row ${choose.id % 2 === 0 && "lg:flex-row-reverse"} mb-20 px-20 items-center justify-between gap-20`} key={choose.id}>
            <div>
              <img src={choose.img} alt="why choose img" />
            </div>
            <div>
              <h2 className='text-2xl font-medium'>{choose.number}</h2>
              <h2 className='text-[2rem] font-bold mt-2 mb-5'>{choose.title}</h2>
              <p>{choose.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default WhyChoose;