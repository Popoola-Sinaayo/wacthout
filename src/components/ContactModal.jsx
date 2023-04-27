import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import ContactModalImg from "../assets/contactModal.svg";
import { RxCross2 } from "react-icons/rx"

const ContactModal = ({ isOpen, closeModal }) => {
  const handleForm = (e) => {
    e.preventDefault();
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div className='flex items-center justify-between'>
                  <img className='w-72' src={ContactModalImg} alt="contact modal image" />
                  <div className='px-10 relative'>
                    <RxCross2 className='absolute -top-12 left-[27.5rem] cursor-pointer hover:bg-gray-300 text-2xl' onClick={closeModal} />
                    <Dialog.Title
                      as="h3"
                      className="text-3xl font-bold"
                    >
                      Get in touch
                    </Dialog.Title>
                    <p>24/7 We answer your questions and problems</p>
                    <div className="mt-8">
                      <form onSubmit={handleForm}>
                        <input className='border rounded w-full px-2 py-2 mb-3' type="text" name="name" id="" placeholder='Your name' />
                        <input className='border rounded w-full px-2 py-2 mb-3' type="text" name="address" id="" placeholder='Your email address' />
                        <input className='border rounded w-full px-2 py-2 mb-3' type="number" name="number" id="" placeholder='Your mobile number' />
                        <textarea className='border rounded w-full px-2 py-2 mb-3' name="message" id="" cols="30" rows="4" placeholder='Write your message'></textarea>
                        <input onClick={closeModal} className='w-full bg-gradient-to-r from-[#00A695] to-[#1D4F9A] text-white rounded-lg px-[4.375rem] py-3' type="submit" value="Send" />
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ContactModal;