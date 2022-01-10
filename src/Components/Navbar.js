import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'



const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => {
        setClick(!click);
    }
    const closeMobilMenu = () => setClick(false);
    const logout = () => {
        console.log("This is the logout route");
        const allCookies = document.cookie.split(';');

        // The "expire" attribute of every cookie is 
        // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
        for (var i = 0; i < allCookies.length; i++)
            document.cookie = allCookies[i] + "=;expires="
                + new Date(0).toUTCString();
        window.location.pathname = "/login"

    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Bllogger's Stop <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobilMenu}>
                                Home
                            </Link>


                        </li>
                        <li>
                            <Link to="/polls" className='nav-links' onClick={closeMobilMenu}>Polls</Link>
                        </li>
                        <li>
                            <Link to='/writeblog' className='nav-links' onClick={closeMobilMenu}>Write A Blog</Link>
                        </li>
                        <li>
                            <Link to='/favourites' className='nav-links' onClick={closeMobilMenu}>Favourites</Link>
                        </li>

                    </ul>
                    {button && <Button className="nav-links-mobile" onClick={logout} buttonStyle='btn--outline' buttonSize='btn--medium'>Logout</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
