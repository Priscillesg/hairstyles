import React from 'react';
import { useState, useEffect } from 'react';
import APIService from '../hooks/yelp-api/APIService';
import {useCookies} from 'react-cookie';
import OneFavorite from './OneFavorite';
import TopNav from '../LandingPage/TopNav/TopNav';
import './Favourites.css';
import {RiDeleteBin6Line} from "react-icons/ri"

const FavouritesList = () => {
    const [favouritesList, setFavouritesList] = useState([])
    const [selectedId, setSelectedId] = useState('')
    const [token] = useCookies(['mytoken'])

    useEffect(() => {
        fetch('https://hairbypris.herokuapp.com/api/favoris/', {
            'method':'GET',
            headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token['mytoken']}` 
            }
        })
        .then(resp => resp.json())
        .then(resp => setFavouritesList(resp))
        .catch(error => console.log(error))

    }, [token]) 
    
    const onDeleteFavourites= (id) => {
        
        const newFavouriteList = favouritesList.filter(
            
			(favourite) => favourite.id !== id        
		);

        setFavouritesList(newFavouriteList);
        setSelectedId(id)
        
    }

    useEffect(() => {
        APIService.DeleteFavourite(selectedId)
        .then(resp =>  console.log(resp))
        .catch(error =>console.log(error))

    }, [selectedId]) 

    const listOfFavourites = favouritesList.map((favourite) =>{
        return (
            <div key={favourite.id} className="div-delete">
                <div onClick = {()=>onDeleteFavourites(favourite.id)}><RiDeleteBin6Line className="delete-icon mb-3"/></div>
                <OneFavorite id ={favourite.business_id} name={favourite.name} image={favourite.image_url}/>
                
            </div>

        )}
        
    )



    return (
        <div>
            <TopNav/>
            
            <div className="w-800px p-0 separator">
            <h1 className="text-center fs-3 fw-bold m-5 text-white">YOUR FAVOURITES</h1>
                {listOfFavourites}
                </div>
            
        </div>
    )
}

export default FavouritesList;