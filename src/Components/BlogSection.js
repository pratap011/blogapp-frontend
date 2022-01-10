import { React, useState, useEffect } from 'react'
import './BlogSection.css';
import image from '../img-home.jpg'
import axios from 'axios';

const BlogSection = () => {

    const [post, setPost] = useState({});
    const [fav, setFav] = useState(false);
    const [btnbg, setBtnbg] = useState(false);
    const [liked, setLiked] = useState(false);


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        axios.get(`http://localhost:5000/viewblog?id=${params.get('id')}`).then((res) => setPost(res));
    }, [])

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        axios.get(`http://localhost:5000/favourites/check?blogid=${params.get('id')}&id=${document.cookie.slice(12,)}`)
            .then((res) => {
                console.log(res)
                if (res.data == "Yes") {
                    setBtnbg(true);
                    setLiked(true);
                }
            })
    }, [])

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (fav) {
            console.log(params.get('id'));
            axios('http://localhost:5000/favourites', {
                method: 'POST',
                data: { blogid: `${params.get('id')}`, id: `${document.cookie.slice(12,)}` },
                headers: {
                    // 'Authorization': `bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                if (res.data == "1") {
                    setBtnbg(true);
                }

            })
        }


    }, [fav]);

    const favHandler = () => {
        if (!liked) {
            setFav(true);
        }
        else {
            console.log("Already added")
        }

    }

    console.log(post);
    return (
        <div className="blog-layout">
            <div className="blog--header">
                {post.data ? (<h1 className="blog-title">
                    {post.data[0].title}
                </h1>) : (<h1 className="blog-title">
                    No data yet...
                </h1>)}
                <div style={{ display: "flex", justifyContent: "space-around" }} className="fav">
                    <p>-Pratap, 25-09-21</p>
                    <span><i style={btnbg ? { color: "red" } : { cursor: "pointer" }} onClick={favHandler} class="far fa-bookmark"></i></span></div>

            </div>
            <img className="blog-image" src={image} alt="Blog heading Image" />
            <div className="blog-content">
                {post.data ? (<h3 className="blog-title">
                    {post.data[0].content}
                </h3>) : (<h3 className="blog-title">
                    No data yet...
                </h3>)}
            </div>



        </div>
    )
}

export default BlogSection
