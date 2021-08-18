import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import APIService from '../hooks/yelp-api/APIService';
import TopNav from '../LandingPage/TopNav/TopNav';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerReview from '../CustomerReview/CustomerReview';



const BusinessDetails = () => {

    const [businessDetail, setBusinessDetail] = useState({})
   

    const [favourites, setFavourites] = useState({})
    const { business_id } = useParams();
    const [pictures, setPictures] = useState([])
    // const [token] = useCookies(['mytoken'])


    // let history = useHistory()

    useEffect (()=>{
        // const abortController = new AbortController();
        // const signal = abortController.signal

        fetch(`https://hairbypris.herokuapp.com/api_list/${business_id}`, {
            'method':'GET',
            headers: {
              'Content-Type':'application/json',
            //   'Authorization':`Token ${token['mytoken']}`
              'Authorization':`Token 164db5e00610c5a682f19e61ec0960f656de73b2` 
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            setBusinessDetail(resp)
            setPictures(resp.photos)
            ;
        })
        .catch(error => console.log(error));

        
    },[business_id])


    const onFavorites = () => {
        setFavourites({
            name: businessDetail.name,
            image_url: businessDetail.image_url,
            business_id: businessDetail.id
        })
    }

    useEffect(() => {
        APIService.SaveFavoris(favourites)
        .then(resp =>  console.log(resp))
        .catch(error =>console.log(error))

    }, [favourites]) 

   const [reviews, setReviews] = useState([])
    useEffect (()=>{
        const abortController = new window.AbortController();
        const signal = abortController.signal

        fetch(`https://hairbypris.herokuapp.com/api_list/${business_id}/reviews`, {
            'method':'GET',
            headers: {
              'Content-Type':'application/json',
              'Authorization':`Token 164db5e00610c5a682f19e61ec0960f656de73b2` 
            }
        }, { signal: signal })
        .then(resp => resp.json())
        .then(resp => {setReviews(resp.reviews);
            console.log(resp)
        })
        .catch(error => console.log(error));
        return function cleanup() {
            abortController.abort();
          };
 
        
    },[business_id])

    console.log("this are customers reviews",reviews)


    return (
        <div>
             <TopNav/>
            <div className="container-businessdetails">
                <h3 className="text-center fs-6 fw-bold mt-3">PHOTOS</h3>
                <CarouselContainer photos = {pictures}
                                    onFavorites={onFavorites}
                                    name={businessDetail.name}
                                    rating={businessDetail.rating}
                                    review_count={businessDetail.review_count}/>
                <h3 className="text-center fs-6 fw-bold mt-3 mb-3">CUSTOMER REVIEWS</h3>
                <CustomerReview reviews={reviews}/>
            </div>
        </div>
    )
}

export default BusinessDetails;