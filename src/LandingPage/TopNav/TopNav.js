import React from 'react';
import './TopNav.css';
import { Link } from "react-router-dom";
import image1 from "../../images/BW62.svg";

const TopNav = () => {

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Nubian Hair Style</a>
                    <img src={image1} className="image-logo"/>
                    <div className="main-menu">
                        <div><Link to="Login" className="signIn">SIGN IN/SIGN UP</Link></div>
                        <div><Link to="Favourites" className="signIn">FAVOURITES</Link></div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TopNav 