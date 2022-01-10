import React from 'react'
import BlogSection from '../BlogSection'
import Navbar from '../Navbar'

const Blogs = () => {

    if (!document.cookie.match(/^(.*;)?\s*userData\s*=\s*[^;]+(.*)?$/)) {
        window.location.pathname = "/login"
        console.log()
    }

    return (
        <div>
            <BlogSection />
        </div>
    )
}

export default Blogs
