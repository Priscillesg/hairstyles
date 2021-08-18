import React from 'react';
import SearchResult from './SearchResult/SearchResult';
import './SearchResults.css'
// import Spinner from '../../Spinner/Spinner.js';

const SearchResults = (props) => {
    console.log(props.businesses)
    if(!props.businesses || !props.businesses.length) {
        return (<div></div>)
    }
    const searchResults = props.businesses.map(b => <SearchResult key={b.id} business={b}/>);
    
    return (
        <div className='search-results'>
            {searchResults}
        </div>
    );
}

export default SearchResults;