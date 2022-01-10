import { React, useState, useEffect } from 'react'
import FavouritesSection from '../FavouritesSection';


const Favourites = () => {
    if (!document.cookie.match(/^(.*;)?\s*userData\s*=\s*[^;]+(.*)?$/)) {
        window.location.pathname = "/login"
        console.log()
    }
    return (
        <div>
            <FavouritesSection />
        </div>
    )
}

export default Favourites;
