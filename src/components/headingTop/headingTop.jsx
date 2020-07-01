import React , {useState} from 'react'
import './headingTop.css';
import { FaSearch } from 'react-icons/fa';

const HeadingTop = (props) => {

    const [searchText,setSearchText] = useState('');

    const getSearchValue = (e) => {
        setSearchText(e.target.value);
        props.callMe(false);
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            props.callMe(searchText);
        }
    }

    return (
        <div className="row" id="topName-heading">
            <div className="col-12 col-sm-12 col-md-6 col-xl-8 col-lg-8">
                <div className="d-flex">
                <p className="mr-3 mb-0">{props.heading}</p>
                <span>{props.subHeading}</span></div>
            </div>
            {
                props.showField &&
                    <div className="col-12 col-sm-12 col-md-6 col-xl-4 col-lg-4">
                        <input 
                         value={searchText}
                         type="text" 
                         placeholder="Search"
                         onChange={(e) => getSearchValue(e)}
                         onKeyPressCapture={(e) => handleKeyPress(e)} 
                         className="search-input" /> <FaSearch className="s-icon" />
                    </div>
            }
        </div>
    )
}

export default HeadingTop;
