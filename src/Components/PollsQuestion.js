import axios from 'axios';
import { React, useState, useEffect } from 'react';
import './PollsQuestion.css'
const PollsQuestion = (props) => {

    const [submit, setSubmit] = useState(false);
    const [answer, setAnswer] = useState();
    const [final, setFinal] = useState(false);
    const [showanswers, setShowanswers] = useState(false)
    const [option1, setOption1] = useState();
    const [option2, setOption2] = useState();
    const [option3, setOption3] = useState();
    const [total, setTotal] = useState();

    const submitbutton = "Submit";
    const submitted = "Submitted"


    useEffect(() => {

        if (answer) {
            axios('http://localhost:5000/viewpolls', {
                method: 'POST',
                data: { id: props.id, choice: answer },
                headers: {
                    // 'Authorization': `bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res);
                setShowanswers(true)
            })
        }
    }, [final])

    useEffect(() => {
        if (showanswers) {
            axios.get(`http://localhost:5000/viewpolls/specific?id=${props.id}`)
                .then((res) => {
                    console.log(res.data)
                    setOption1(res.data[0].option_one_count);
                    setOption2(res.data[0].option_two_count);
                    setOption3(res.data[0].option_three_count);
                    console.log(option2)
                })
        }
    }, [showanswers])

    const submitInput = (e) => {
        setAnswer(e.target.value);
        setSubmit(true)
    }

    const submitHandler = (e) => {
        setFinal(true)
    }


    return (

        <div style={props.modal ? { filter: "blur(3px)" } : {}} className="polls-question">
            <p className="question">
                {props.question}
            </p>
            <div className="option">
                <label>
                    <input onClick={(e) => submitInput(e)} value="1" type="radio" name="radio" />
                    <span>{props.option_one}</span>

                </label>
                {option1 ? <p className="res">{option1} people voted for this.</p> : null}
            </div>

            <div className="option">
                <label>
                    <input onClick={(e) => submitInput(e)} value="2" type="radio" name="radio" />
                    <span>{props.option_two}</span>

                </label>
                {option2 ? <p className="res">{option2} people voted for this.</p> : null}
            </div>
            <div className="option">
                <label>
                    <input onClick={(e) => submitInput(e)} value="3" type="radio" name="radio" />
                    <span>{props.option_three}</span>

                </label>
                {option3 ? <p className="res">{option3} people voted for this.</p> : null}
            </div>
            <br></br>
            <br></br>
            {submit ? <button style={final ? { backgroundColor: "green", cursor: "context-menu" } : null} onClick={submitHandler} className="submit-poll" type="submit">{final ? submitted : submitbutton}</button> : null}

        </div>
    )
}

export default PollsQuestion
