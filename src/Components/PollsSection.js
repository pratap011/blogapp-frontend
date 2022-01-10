import { React, useState, useEffect } from 'react'
import PollsQuestion from './PollsQuestion';
import './PollsSection.css'
import axios from 'axios';
import CreatePoll from './CreatePoll';


const PollsSection = () => {

    const [polls, setPolls] = useState([]);
    const [showmodal, setShowmodal] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:5000/viewpolls')
            .then((res) => {
                console.log(res)
                setPolls(res.data);
            })
    }, [])
    const openModal = () => {
        window.scrollTo(0, 0)
        setShowmodal(true);
    }

    const closeModal = () => {
        setShowmodal(false);
    }


    console.log(polls)
    return (
        <div className="polls-layout">

            <h2 style={showmodal ? { filter: "blur(3px)" } : {}} className="heading-poll">Polls Section</h2>
            <div style={showmodal ? { filter: "blur(3px)" } : {}} className="poll-prompt">
                <p >Have some questions, or any queries? Add your own poll!</p>
                <button onClick={openModal} type="submit" className="add-poll-btn">Add Poll</button>
            </div>

            {showmodal && <CreatePoll closeModal={closeModal} />}
            {polls ?
                polls.map((obj, ind) => {
                    return (

                        <PollsQuestion question={obj.question} option_one={obj.option_one} option_two={obj.option_two} option_three={obj.option_three} id={obj.id} modal={showmodal} ind={obj.ind} />



                    )

                })
                : null}


            <br></br>
        </div>
    )
}

export default PollsSection;
