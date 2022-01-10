import { React, useState, useEffect } from 'react';
import { Button } from './Button';
import './RegisterSection.css'
import axios from 'axios';

const RegisterSection = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);
    const [res, setRes] = useState()


    useEffect(() => {
        if (fname) {
            axios('http://localhost:5000/register', {
                method: 'POST',
                data: { name: fname, lname: lname, email: email, username: username, password: password },
                headers: {
                    // 'Authorization': `bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res)
                setRes(res)
                if (res.data == "2") {
                    window.location.pathname = "/login";
                }
            })
        }

    }, [submit])

    const submitHandler = () => {
        console.log("In submit handler")
        if (email != "" & fname != "" & lname != "" & password != "" & username != "") {
            console.log("reached if else")
            setSubmit(true);
        }
        else {
            window.alert("Please fill out all the details")
        }

    }

    console.log(res)
    return (








        <div className="auth-form">
            <p className="heading">Register</p>
            <label name="firstname">First Name</label>
            <br></br>
            <input value={fname} onChange={(e) => { setFname(e.target.value) }} name="firstname"></input>
            <label name="lastname">Last name</label>
            <input value={lname} onChange={(e) => { setLname(e.target.value) }} name="lastname"></input>
            <label name="email">Email</label>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} name="email"></input>
            <label name="username">Username</label>
            <input value={username} onChange={(e) => { setUsername(e.target.value) }} name="username"></input>
            <label name="password">Password</label>
            <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" name="password"></input>
            <br></br>
            <br></br>
            {/* <button type="submit">Submit</button> */}
            <button onClick={submitHandler} className="button-class" buttonStyle='btn--outline' buttonSize='btn--medium'>Sign Up</button>
            <br></br>
            <br></br>
            {res == null ? null : res.data == "2" ? null : <div className="result-err">
                <h3 className="err-title">You are already registered as this user , login via <a href="/login">this link</a></h3>
            </div>}
            <p>Already have an account? <a href="/login">Log in</a></p>
        </div>







    )
}

export default RegisterSection;
