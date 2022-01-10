
import axios from 'axios';
import { React, useState, useEffect } from 'react';
import './createPoll.css'

const CreatePoll = (props) => {

    const [question, setQuestion] = useState("");
    const [optionone, setOptionone] = useState("");
    const [optiontwo, setOptiontwo] = useState("");
    const [optionthree, setOptionthree] = useState("");
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (question) {
            axios(`http://localhost:5000/addpolls?id=${document.cookie.slice(12,)}`, {
                method: 'POST',
                data: { question: question, option_one: optionone, option_two: optiontwo, option_three: optionthree },
                headers: {
                    // 'Authorization': `bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res);
                if (res.data == "1") {
                    window.location.pathname = "/polls";
                }
            })
        }

    }, [submit]);

    const submitHandler = () => {
        if (question !== "" & optionone !== "" & optiontwo !== "" & optionthree !== "") {
            setSubmit(true);
        }
        else {
            window.alert("Please enter all the details.")
        }
    }


    return (
        <div className="modal-background">
            <div className="modal-content">
                <h4 className="heading">Add A Poll</h4>
                <div className="poll-cont">
                    <div className="cont-poll">
                        <label className="labels">Question</label>
                        <input value={question} className="input-add-poll" onChange={(e) => setQuestion(e.target.value)} ></input>
                    </div>
                    <div className="cont-poll">
                        <label className="labels">Option one</label>
                        <input value={optionone} className="input-add-poll" onChange={(e) => setOptionone(e.target.value)} ></input>
                    </div>
                    <div className="cont-poll">
                        <label className="labels">Option two</label>
                        <input value={optiontwo} className="input-add-poll" onChange={(e) => setOptiontwo(e.target.value)} ></input>
                    </div>
                    <div className="cont-poll">
                        <label className="labels">Option three</label>
                        <input value={optionthree} className="input-add-poll" onChange={(e) => setOptionthree(e.target.value)} ></input>

                    </div>

                </div>
                <br></br>
                <br></br>
                <div className="buttons">
                    <button onClick={props.closeModal} className="closemodal">Close</button>
                    <button onClick={submitHandler} type="submit" className="submit">Submit</button>

                </div>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default CreatePoll
