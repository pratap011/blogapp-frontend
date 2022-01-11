import { React, useState, useEffect } from 'react'
import CardItem from './CardItem'
import './FavouritesSection.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


const FavouritesSection = (props) => {

    const [favourites, setFavourites] = useState([]);
    const [zero, setZero] = useState(true);


    useEffect(() => {
        axios.get(`http://localhost:5000/favourites?id=${document.cookie.slice(12,)}`)
            .then((res) => {
                console.log(res.data[0].title)
                if (res.data.length > 0) {
                    setZero(false)
                    setFavourites(res.data)
                }

            })
    }, [])

    console.log(document.cookie.slice(12,))

    const deleteHandler = (blogid) => {
        axios.delete(`http://localhost:5000/favourites?id=${document.cookie.slice(12,)}&blogid=${blogid}`)
            .then((res) => {
                if (res.data == "Deleted") {
                    window.location.pathname = "/favourites"
                }
            })
    }
    return (
        <div className='="favourites-layout'>
            <h1 className="favourites-heading">
                Your Favourite Posts
            </h1>
            <div className="cards-container">
                {zero ? <h1 style={{ fontSize: "40px", width: "100%", color: "gray" }}>No favourites added yet!</h1> :
                    favourites.map((obj) => {
                        return (
                            <div className="main-fav">
                                <Link style={{ textDecoration: "none" }} to={"/blog?id=" + obj.id}>
                                    <CardItem text={obj.title} label={obj.category} id={obj.id} />
                                </Link>
                                <span><i style={{ cursor: "pointer" }} onClick={() => deleteHandler(obj.id)} class="far fa-trash-alt"></i></span>
                            </div>


                        )

                    })
                }

            </div>


        </div>
    )
}

export default FavouritesSection
