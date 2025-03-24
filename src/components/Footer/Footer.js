import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-main-div'>
      <div style={{alignSelf: 'center'}}>
        <img src='icons_assets\Logo.svg' alt='Little Lemon Logo' />
      </div>
      <div className='footer-doormat-navigation'>
        <span className='footer-doormat-navigation-header'>Doormat Navigation</span>
        <br></br>
        <span>Home</span>
        <span>About</span>
        <span>Menu</span>
        <span>Reservations</span>
        <span>Order Online</span>
        <span>Login</span>
      </div>
      <div className='footer-doormat-navigation'>
        <span className='footer-doormat-navigation-header'>Contact</span>
        <br></br>
        <span>Address</span>
        <span>Phone Number</span>
        <span>Email</span>
      </div>
      <div className='footer-doormat-navigation'>
        <span className='footer-doormat-navigation-header'>Social Media Links</span>
        <br></br>
        <span>Twitter</span>
        <span>Facebook</span>
        <span>Instagram</span>
      </div>
    </footer>
  )
}

export default Footer;
