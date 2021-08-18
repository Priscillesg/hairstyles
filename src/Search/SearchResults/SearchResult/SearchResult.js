import React,{useState, useEffect} from 'react';
import './SearchResult.css'
import { Link , useParams} from "react-router-dom";
import Rating from 'front10-rating';

const SearchResult = (props) => {
    
    const b = props.business;

    if (!b) {
        return (<div/>);
    }


    return (
  
        <div className="results">
            <div className="card mb-3" styles="max-width: 540px;">
                <div className="test-results">
                <Link to={`/api_list/${b.id}`}>
                    <img src={b.image_url} className='business-image' alt="..."/>
                </Link>
                    <div className="business-info">
                        <h5 className="mt-0">{b.name}</h5>
                        <Rating value={b.rating} />
                        <p>{b.review_count} reviews</p>
                        <p className="categories">{b.categories.map(category => {return <span className='business-tag' key={b.id}>{category["title"]}</span>})}</p>
                        <p>{b.location.display_address}<span className="hidden">This is some placeholder content for the custom component</span></p>
                        <a href={b.url}><button type="button" className="btn btn-secondary btn-results">View Website</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;