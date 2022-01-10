import React from 'react'
import '../App.css'
import './HeroSection.css'
import image from '../img-home.jpg'

const HeroSection = () => {
    return (
        <div className="hero-container">
            {/* <img src={image} alt="Image" /> */}
            <h1>One Stop For Readers and Writers.</h1>

            <div class="search-box">
                <button class="btn-search"><i class="fas fa-search"></i></button>
                <input type="text" class="input-search" placeholder="Find your favourite blogs..." />
            </div>

        </div>

    )
}

export default HeroSection
