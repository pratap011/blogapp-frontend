import React from 'react'
import { Link } from 'react-router-dom'
import './CardItem.css'

const CardItem = (props) => {
    return (
        <>
            {/* <li className="cards__item">
                <Link to="/blog" className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src="/" alt="card__item__img" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li> */}

            <div className="article-container">
                <article class="article-card">
                    <figure className="article-image">
                        <img src="/" alt="image" />
                    </figure>
                    <div className="article-content">
                        <p className="card-category">{props.label}</p>
                        <h3 className="card-title">{props.text}</h3>

                    </div>

                </article>
            </div>

        </>
    )
}

export default CardItem
