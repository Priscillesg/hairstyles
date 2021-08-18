import React from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Search from './Search/Search';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BusinessDetails from './BusinessDetails/BusinessDetails';
import Favourites from './Favourites/Favourites';
import Login from './Login/Login';
import Section from './Section/Section'
import {CookiesProvider} from 'react-cookie';

const App = () => {
  return (
    <CookiesProvider>
    <Router>
      <Route path='/search' exact  component={Search} />
      <Route path='/' exact  component={LandingPage}/>
      <Route path='/api_list/:business_id' exact component={BusinessDetails}/>
      <Route  path='/favourites' exact component={Favourites}/>
      <Route  path='/login' exact component={Login}/>      
    </Router>
    </CookiesProvider>
  
  );
}

export default App;
