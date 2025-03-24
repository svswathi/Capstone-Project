import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';

const Hero = () => {

    const navigate = useNavigate();

    const onReserveButtonClick = () => {        
        navigate('/booking');
    }

    return (
        <div className='hero-grid'>
            <div className='hero-details-div'>
                <Title />
                <div className='hero-desc'>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </div>
                <div >
                    <button className='hero-reserve-button' onClick={onReserveButtonClick}>
                        Reserve a table
                    </button>
                </div>
            </div>
            <div className='hero-img-div'>
                <img src="icons_assets\restauranfood.jpg" alt="Restaurant food" className='hero-img' />
            </div>
        </div>
    )
}

export default Hero
