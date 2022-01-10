import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardItem from './Components/CardItem'
import './Cards.css'
import axios from 'axios';

const Cards = () => {

    const [blog, setBlog] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then((res, prevArray) => {
                setBlog(res.data)
            })
    }, [])

    return (
        <div className="cards">
            <h1>Top posts </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {blog.map((obj) => {
                            return (
                                <Link style={{ textDecoration: "none" }} to={"/blog?id=" + obj.id}>
                                    <CardItem text={obj.title} label={obj.category} />
                                </Link>

                            )

                        })}


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
