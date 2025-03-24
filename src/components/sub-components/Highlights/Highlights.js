import React from 'react';
import './Highlights.css';

const Highlights = () => {
  return (
    <div style={{padding: '10px'}}>
      <div className='highlights-specials-div'>
        <div className='highlights-specials'>
          Specials
        </div>
        <div >
          <button className='hero-reserve-button'>
            Order Online
          </button>
        </div>
      </div>
      <div className='highlights-menu-div'>
        <div className='highlights-menu-dish'>
          <div className='highlights-menu-dishimg'>
            <img src="icons_assets\greek salad.jpg" alt="Greek Salad" className='highlights-menu-img' />
          </div>
          <div>
            <div className='highlights-menu-dishnameprice'>
              <div className='highlights-menu-dishname'>
                Greek Salad
              </div>
              <div className='highlights-menu-dishprice'>
                $12.99
              </div>
            </div>
            <div className='highlights-menu-dishdesc'>
              A Greek salad is a fresh and vibrant dish made with crisp cucumbers, ripe tomatoes, red onions, Kalamata olives, feta cheese, and a drizzle of olive oil, often seasoned with oregano and served with a slice of pita bread.
            </div>
          </div>
        </div>
        <div className='highlights-menu-dish'>
          <div className='highlights-menu-dishimg'>
            <img src="icons_assets\bruchetta.svg" alt="Greek Salad" className='highlights-menu-img' />
          </div>
          <div>
            <div className='highlights-menu-dishnameprice'>
              <div className='highlights-menu-dishname'>
                Brushetta
              </div>
              <div className='highlights-menu-dishprice'>
                $7.99
              </div>
            </div>
            <div className='highlights-menu-dishdesc'>
              Bruschetta is a classic Italian appetizer consisting of toasted bread topped with a mixture of diced tomatoes, fresh basil, garlic, and olive oil, often seasoned with salt and pepper.
            </div>
          </div>
        </div>
        <div className='highlights-menu-dish'>
          <div className='highlights-menu-dishimg'>
            <img src="icons_assets\lemon dessert.jpg" alt="Greek Salad" className='highlights-menu-img' />
          </div>
          <div>
            <div className='highlights-menu-dishnameprice'>
              <div className='highlights-menu-dishname'>
                Lemon Dessert
              </div>
              <div className='highlights-menu-dishprice'>
                $10.99
              </div>
            </div>
            <div className='highlights-menu-dishdesc'>
              Lemon dessert is a refreshing and tangy treat, typically made with a zesty lemon flavor in forms like tarts, cakes, or mousses, often complemented by a sweet and smooth finish.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Highlights
