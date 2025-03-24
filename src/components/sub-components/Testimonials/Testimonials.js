import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <>
      <div className='testimonials-div'>
        <div className='testimonials-text'>
          Testimonials
        </div>
      </div>
      <div className='testimonials-rating-div'>
        <div className='testimonials-padding'>
          <div className='highlights-menu-dishdesc testimonials-alignment'>
            <span>Rating</span>
            <img src='icons_assets\four star.png' alt='four-star' className='testimonials-rating-star' />
            <span>(4)</span>
          </div>
          <div className='testimonials-image-name'>
            <img src='icons_assets\rating1.jpg' alt='Rating one' className='testimonials-image' />
          </div>
          <div className='testimonials-name'>
            Greek Salad
          </div>
          <div className='highlights-menu-dishdesc'>
            The Greek salad was fresh and flavorful, with a perfect balance of tangy feta, crisp veggies, and a zesty dressing, though I wish there had been a bit more olives to fully elevate the taste.
          </div>
        </div>
        <div className='testimonials-padding'>
          <div className='highlights-menu-dishdesc testimonials-alignment'>
            <span>Rating</span>
            <img src='icons_assets\two star.png' alt='two-star' className='testimonials-rating-star' />
            <span>(2)</span>
          </div>
          <div className='testimonials-image-name'>
            <img src='icons_assets\rating3.jpg' alt='Rating one' className='testimonials-image' />
          </div>
          <div className='testimonials-name'>
            Lemon Dessert
          </div>
          <div className='highlights-menu-dishdesc'>
            The lemon dessert had a nice citrus flavor, but it was overly sweet and lacked the refreshing tang I was hoping for, leaving me a bit disappointed.
          </div>
        </div>
        <div className='testimonials-padding'>
          <div className='highlights-menu-dishdesc testimonials-alignment'>
            <span>Rating</span>
            <img src='icons_assets\five star.png' alt='five-star' className='testimonials-rating-star' />
            <span>(5)</span>
          </div>
          <div className='testimonials-image-name'>
            <img src='icons_assets\rating2.jpg' alt='Rating one' className='testimonials-image' />
          </div>
          <div className='testimonials-name'>
            Brushetta
          </div>
          <div className='highlights-menu-dishdesc'>
            The bruschetta was absolutely delicious—perfectly toasted bread topped with fresh, juicy tomatoes, aromatic basil, and a hint of balsamic glaze, making every bite a burst of flavor!
          </div>
        </div>
        <div className='testimonials-padding'>
          <div className='highlights-menu-dishdesc testimonials-alignment'>
            <span>Rating</span>
            <img src='icons_assets\four star.png' alt='four-star' className='testimonials-rating-star' />
            <span>(4)</span>
          </div>
          <div className='testimonials-image-name'>
            <img src='icons_assets\rating4.jfif' alt='Rating one' className='testimonials-image' />
          </div>
          <div className='testimonials-name'>
            Lemon Dessert
          </div>
          <div className='highlights-menu-dishdesc'>
            The lemon dessert was light and refreshing with a nice balance of tartness and sweetness, though it could have used a bit more of a creamy texture to make it even more indulgent.
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
