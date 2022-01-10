import { React, useState, useEffect } from 'react'
import './BlogAdd.css'
import { Button } from './Button';
import axios from 'axios';

const AddBlog = () => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [submit, setSubmmit] = useState(false);


    useEffect(() => {
        if (title) {
            axios(`http://localhost:5000/createpost?id=${document.cookie.slice(12,)}`, {
                method: 'POST',
                data: { title: title, category: category, content: content },
                headers: {
                    // 'Authorization': `bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                console.log(res);
                window.location.pathname = "/"

            })
        }
    }, [submit])
    const submitHandler = () => {
        if (title !== "" & category !== "" & content !== "") {
            setSubmmit(true)
        }
        else {
            window.alert("Please fill out everything!");

        }
    }
    return (
        <div className="body">
            <div className="text-layout">
                <h1 className="heading">Write A Blog</h1>
                <div className="form-area">
                    <div className="section">
                        <label className="label" name="title">Title</label>
                        <br></br>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className="input" type="text" name="title"></input></div>
                    <div className="section">
                        <label className="label" name="category">Category</label>
                        <br></br>
                        <input value={category} onChange={(e) => setCategory(e.target.value)} className="input" name="category" type="text"></input>
                    </div>
                    <div className="section">
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} className="cont-area" placeholder="Type out your thoughts..." name='content'></textarea>
                    </div>
                    <button onClick={submitHandler} className="form-button" type='submit'>Submit</button>
                </div>


            </div>

        </div>
    )
}

export default AddBlog
