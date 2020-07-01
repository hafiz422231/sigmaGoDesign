import React from 'react'
import './welcomeField.css';
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom';


const WelcomeField = (props) => {
    return (
        <div className="search-bar">
            
        <h1 id="welcome-text">{props.text}</h1>
        <div className="input-group mb-4">
            <div className="input-group-prepend">
                <button type="button" className="btn pr-3">Tickets</button>
                <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                
                        
                
                <div role="separator" className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="">Separated link</Link>
                </div>
            </div>
            
            <FaSearch style={{ position: 'absolute' , 
             right: '15px' , 
             color:'white' , 
             zIndex: 9999,
             top: '11px',
             }} />
            
            <input type="text" 
             className="form-control" 
             placeholder="How we may help you"
             aria-label="Text input with segmented dropdown button" />
        </div>
    </div>
    )
}

export default WelcomeField;
