import { React, useEffect, useState } from 'react'
import './RegisterSection.css'
import axios from 'axios';


const LoginSection = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);
    const [res, setRes] = useState("");
    const submitHandler = () => {
        console.log("Reached")

        if (username != "" & password != "") {
            setSubmit(!submit);
        }
        else {
            console.log("Reached 1")
            window.alert("Please fill out all the details")
        }

    }

    useEffect(() => {
        if (document.cookie.match(/^(.*;)?\s*userData\s*=\s*[^;]+(.*)?$/)) {
            window.location.pathname = "/"
        }
    }, [])

    useEffect(() => {
        if (username) {
            axios('http://localhost:5000/login', {
                method: 'POST',
                data: { username: username, password: password },
                headers: {
                    // 'Authorization': `bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res)
                if (res.data == "1") {
                    setRes("User is not registered yet, please register")``
                }
                else if (res.data == "2") {
                    setRes("Wrong password. Please enter the right password")
                }
                else {
                    document.cookie = `userData=id:${res.data.id};SameSite=None;Secure`;
                    window.location.pathname = "/"
                }



            })
        }
    }, [submit])

    return (
        <>
            {res !== "" ? <div className="result-err">
                <h3 className="err-title">{res}</h3>
            </div> : null}
            <div className="auth-form">
                <p className="heading">Login</p>
                <label name="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} name="username"></input>
                <label name="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password"></input>
                <br></br>
                <br></br>
                {/* <button type="submit">Submit</button> */}
                <button onClick={submitHandler} className="button-class">Log in</button>
                <br></br>
                <br></br>
                <p>New to BloggerStop? <a href="/register">Sign Up</a></p>

            </div>

        </>
    )
}


export default LoginSection
