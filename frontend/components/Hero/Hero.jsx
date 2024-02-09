import React from 'react';
import './Hero.css'
import heroImage from '../../src/assets/hero.jpg'

const Hero = () => {
    return (
        <div className='hero'><img src={heroImage} alt="hero-image" /></div>
    )
}

export default Hero