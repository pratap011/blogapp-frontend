import { React, useState, useEffect } from 'react'
import CardItem from './CardItem'
import './FavouritesSection.css'
import axios from 'axios'


const FavouritesSection = (props) => {

    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/favourites?id=${document.cookie.slice(12,)}`)
            .then((res) => {
                setFavourites(res.data)
            })
    }, [])

    console.log(document.cookie.slice(12,))

    return (
        <div className='="favourites-layout'>
            <h1 className="favourites-heading">
                Your Favourite Posts
            </h1>
            <div className="cards-container">
                {
                    favourites.map((obj) => {
                        return (
                            <CardItem text={obj.title} label={obj.category} id={obj.id} />
                        )

                    })
                }

            </div>


        </div>
    )
}

export default FavouritesSection
