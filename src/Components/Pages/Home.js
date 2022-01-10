import '../../App.css';
import { React, useState, useEffect } from 'react';
import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Cards from '../../Cards';


function Home() {
    if (!document.cookie.match(/^(.*;)?\s*userData\s*=\s*[^;]+(.*)?$/)) {
        window.location.pathname = "/login"
        console.log()
    }
    return (
        <>
            <HeroSection />
            <Cards />


        </>
    )
}

export default Home;