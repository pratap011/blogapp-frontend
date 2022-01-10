import React from 'react'
import AddBlog from '../AddBlog'
import WriteBlogForm from '../WriteBlogForm'

const WriteBlog = () => {
    if (!document.cookie.match(/^(.*;)?\s*userData\s*=\s*[^;]+(.*)?$/)) {
        window.location.pathname = "/login"
        console.log()
    }
    return (
        <div>
            <AddBlog />
        </div>
    )
}

export default WriteBlog
