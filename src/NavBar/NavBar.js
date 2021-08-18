import React from 'react'
import TopNav from '../LandingPage/TopNav/TopNav';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className='nav-bar'>
            <div className="test-navbartop">
            <TopNav/>
            </div>
            <div className="test-navbar">
            <SearchBar className="comp"
            term = {props.term}
            location = {props.location}
            search = {props.search}
            />
            </div>
        </div>
    )
}

export default NavBar