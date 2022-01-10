import { React, useState, useEffect } from 'react';


const newPoll = () => {
    return (
        <div className="modal-background">
            <div className="modal-content">
                <h4 className="heading">Add A Poll</h4>
                <div className="poll-cont">
                    <label>
                        <span>Question</span>
                        <input className="input-add-poll" placeholder="Type your question" type="text" name="question" />
                    </label>
                    <label>
                        <span>Option one</span>
                        <input className="input-add-poll" type="text" name="option1" />
                    </label>
                    <label>
                        <span>Option two</span>
                        <input className="input-add-poll" type="text" name="option2" />
                    </label>
                    <label>
                        <span>Option three</span>
                        <input className="input-add-poll" type="text" name="option3" />
                    </label>
                </div>
                <div className="buttons">
                    <button onClick={console.log("Closed")} className="closemodal">Close</button>
                    <button type="submit" className="submit">Submit</button>

                </div>
            </div>
        </div>
    )
}

export default newPoll;
