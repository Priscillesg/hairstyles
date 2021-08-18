import React, {useState} from 'react';
import './SearchBar.css'
import { BsSearch } from "react-icons/bs";
// import Image1 from "../images/afro-hair.png";

const SearchBar = (props) => {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    const submit = (event) => {
        event.preventDefault();
        if(typeof props.search === 'function') {
            props.search(term, location);
        }

        };






    return (
        
            <div className="searchBar">



                <form onSubmit={submit}>
                    {/* <div class="input-group">
                        <input id="inputGroup-sizing-default" type="text" aria-label="First name" className="form-control" placeholder = "Salons" value={term} onChange ={(e)=>setTerm(e.target.value)}/>
                        <input  id="inputGroup-sizing-default"  type="text" aria-label="Last name" className="form-control searchbar-input" placeholder = "Where" value={location} onChange ={(e)=>setLocation(e.target.value)}/>
                        <span id="inputGroup-sizing-default" class="input-group-text" onClick={submit}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></span> */}
                    {/* </div> */}
                <div className="container-form">
                    <p className="form input-icons">
                        <input type="text" className = "input" id="salons" placeholder = "Salons" value={term} onChange ={(e)=>setTerm(e.target.value)}/>
                    </p>
                    <p className="form input-icons">
                        <input type="text" className = "input" id="Where" placeholder = "Where" value={location} onChange ={(e)=>setLocation(e.target.value)}/>
                    </p>
                    <p>
                        <button onClick={submit} className="btn btn-primary"><BsSearch className="ikon"/></button>
                    </p>
                </div>
                </form>
                {/* </div> */}
            </div>
       

    );

}


export default SearchBar