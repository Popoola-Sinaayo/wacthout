import React from 'react';
import { Disclosure } from '@headlessui/react'
import { FiPlus } from "react-icons/fi"
import { AiOutlineMinus } from "react-icons/ai";
import faq from '../mockData/FAQ';

const FAQ = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between mb-[7.5rem]'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-10 lg:mb-0'>Your questions answered</h1>

      <div className="w-full lg:px-4">
        <div className="mx-auto w-full rounded-2xl lg:p-2">
          {
            faq.map((faq) => (
              <Disclosure key={faq.id}>
                {({ open }) => (
                  <div className={`${faq.id === 1 ? "border-y-2" : "border-b-2"} border-[#00A695] py-5`}>
                    <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium">
                      <h6 className='font-medium'>{faq.question}</h6>
                      {open ? <AiOutlineMinus className='h-5 w-5' /> : <FiPlus className='h-5 w-5' />}
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FAQ;