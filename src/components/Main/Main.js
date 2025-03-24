import React from 'react'
import Hero from '../sub-components/Hero/Hero';
import Highlights from '../sub-components/Highlights/Highlights';
import Testimonials from '../sub-components/Testimonials/Testimonials';
import About from '../sub-components/About/About';
import './Main.css';

const Main = () => {
  return (
    <main className="main-section">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  )
}

export default Main;
