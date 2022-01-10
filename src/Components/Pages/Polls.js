import React from 'react'
import PollsSection from '../PollsSection'

const Polls = () => {
    if (!document.cookie.match(/^(.*;)?\s*userData\s*=\s*[^;]+(.*)?$/)) {
        window.location.pathname = "/login"
        console.log()
    }
    return (

        <>
            <PollsSection />
        </>
    )
}

export default Polls
