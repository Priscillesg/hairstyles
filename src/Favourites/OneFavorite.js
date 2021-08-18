import React from 'react'
import './OneFavorite.css';
import { Link } from "react-router-dom";
// import {RiDeleteBin6Line} from "react-icons/ri"


export default function OneFavorite(props) {
    // const removeBusiness = (event) => {
    //     event.preventDefault()
    //     props.deleteFavorite(props.id)
    // }
    return (
        <div>
               
                <div className="d-flex position-relative" className="favourite-results">
                    <Link to={`/api_list/${props.id}`}>
                        <img src={props.image} className="flex-shrink-0 me-3" alt="..." className="favourites-image"/>
                    </Link> 
                    <div>
                        <h5 className="mt-0" className="name-favorite">{props.name}</h5> 
                    </div>
                    {/* <div onChange={removeBusiness}><RiDeleteBin6Line className="delete-icon"/></div> */}

                    
                </div>
           
        </div>
    )
}
