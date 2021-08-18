import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TopNav from './TopNav/TopNav';
import './LandinPage.css';
import { useHistory } from "react-router-dom";
import './LandinPage.css';
import BottomNav from './BottomNav/BottomNav';
import Typewriter from 'typewriter-effect';
import image1 from "../images/BW62.svg";



const LandingPage= () => {

    let history = useHistory();

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(
        `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
        );
      }

    return (
        
            
        <div className='landing'>
            <TopNav/>
            <p className="p-land">Discover black hair salons near you</p>
            <video src="/videos/pexels-kampus-production-6940184.mp4" autoPlay loop muted id="video"></video>
            <div className="overlay d-flex align-items-center justify-content"></div>
            <div className="type">
            <Typewriter
           onInit={(typewriter) => {
               typewriter.typeString("Life is too short to have boring hair")
               .pauseFor(2000)
               .deleteAll()
               .typeString("What happens at the salon, stays at the salon")
               .pauseFor(2000)
               .deleteAll()
               .typeString("Life is more beautiful when you meet the right hairdresser")
               .pauseFor(2000)
               .deleteAll()
               .typeString("Life is too short to have boring hair")
               .pauseFor(2000)
               .deleteAll()
               .typeString("What happens at the salon, stays at the salon")
               .start()
           }}/>
           </div>
            <SearchBar search= {search}/>
            <BottomNav/>
          
        </div>
        
        

    );
}

export default LandingPage