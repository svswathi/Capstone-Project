import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='about-grid'>
      <div className='hero-details-div'>
        <div className='about-title'>
          Little Lemon
        </div>
        <div className='about-city'>
          Chicago
        </div>
        <br></br>
        <div className='highlights-menu-dishdesc'>
          At Little Lemon, we serve fresh, Mediterranean-inspired dishes made with local ingredients and a passion for flavor. Whether you're enjoying a casual lunch or a special dinner, our menu offers something for every taste. With a cozy atmosphere and exceptional service, we strive to make every visit a memorable experience. Come for the food, stay for the warmth—welcome to Little Lemon!
        </div>
      </div>
      <div className='about-img-div'>
        <img src='icons_assets\Mario and Adrian A.jpg' alt='Little Lemon Restaurant' className='about-img' />
        <img src='icons_assets\Mario and Adrian b.jpg' alt='Little Lemon Restaurant' className='about-img' />
      </div>
    </div>
  )
}

export default About
