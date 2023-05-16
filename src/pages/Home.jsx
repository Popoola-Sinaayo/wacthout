import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChoose from '../components/WhyChoose';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='px-[1.5rem] sm:px-[5rem] md:px-[6rem] lg:px-[8.75rem]'>
      <Navbar />
      <Hero />
      <WhyChoose />
      <About />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home;