import React from 'react';
import './CarouselContainer.css';
import './carouselContainer.scss';

import {MdFavorite} from "react-icons/md"
// import Rating from 'front10-rating'




export default function CarouselContainer(props) {

    const onFavoritesUser =(event) => {
        event.preventDefault();
        props.onFavorites()
    }


    
    return (
        <div className="container-fluid business-app">
             <div className="me-5"><MdFavorite onClick = {onFavoritesUser} className="favorites-icon float-end"/></div>
            <div className="row justify-content-center">
                {props.photos.map((photo, index) =>(
                    <div className="image-container d-flex justify-content-center m-3 photo-image">
                        <img src={photo} alt="pictures" className="image-businessDetails"/>
                        <div className="overlay d-flex align-items-center justify-content"></div>
                    </div>
                ))}
            </div>

            {/* <div className="backgroundImage" style={{backgroundImage: 
                `linear-gradient(to right, rgba(42, 42, 42, 0.5), rgba(42, 42, 42, 0.5) ), url(${props.first})`}}>
                    <div><MdFavorite onClick = {onFavoritesUser} className="favorites-icon"/></div>
                    <div className="name">{props.name}</div>
                    <div className="rating-favorites"><Rating value = {props.rating}/>{props.review_count} reviews</div>
            </div> */}
        </div>
   
    )
}
