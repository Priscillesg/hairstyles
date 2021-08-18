import React from 'react';
import './CustomerReview.css';
import image1 from "../images/park-street-m4wTQTvZf2M-unsplash.jpg";

export default function CustomerReview(props) {

    return (
        <div className="container-fluid business-app">
            <div className="row row-reviews justify-content-center">
            {props.reviews.map((review, index) => (
                <div className="card review-card">
                    <div className="card-body card-body-review">
                        <p className="card-text">{review.text}</p>
                    </div>
                    <div className="div-customer-image">
                        <img src={review.user.image_url} alt="customer-image" className="customer-image"/>
                    </div>
                    <div className="customer-name">
                        <span>{review.user.name}</span>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
