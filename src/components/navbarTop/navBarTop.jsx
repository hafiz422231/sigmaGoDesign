import React , {useState} from 'react'
import './navBarTop.css';
import { NavBarLeft } from '../AppData/navBarTop';
import {NavLink} from 'react-router-dom';
import ButtonComponent from '../button/buttonComponent';
import { FaRegBell , FaAlignJustify , FaTimes } from 'react-icons/fa';

const NavBarTop = (props) => {

    const [ showmenu , setShowMenu ] = useState(false);

    return (
        <div className="container-fluid d-flex justify-content-between pt-2 NavBar-Top">
            
            <ul className="nav justify-content-start">

                <img src="/log.png" alt="" className="main-logo mr-2" />
                <p id="sigmGo">sigmaGO</p>
                    
                    {
                        NavBarLeft.map(item => (
                            <li key={item.id} className="nav-item left-nav-item">
                                <NavLink to={`/${item.URL}`} className="item">{item.text} {`(20)`}</NavLink>
                            </li>
                        ))
                    }

                <div id="mobile-nav">
                    <FaAlignJustify className="align-justify" onClick={() => setShowMenu(true)} />
                    <div className={ showmenu ? "mobile-nav-container text-right showmenu" 
                                    : "mobile-nav-container text-right" }>
                        
                        <FaTimes className="close-navbar" onClick={() => setShowMenu(false)} />

                        <ul className="nav flex-column">
                            {
                                NavBarLeft.map(item => (
                                    <li key={item.id} className="nav-item">
                                        <NavLink to={`/${item.URL}`} className="item nav-link">{item.text} {`(20)`}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                        
                    </div>
                </div>
            </ul>
            
            <ul className="nav justify-content-end" id="right-nav-item">
                <li className="nav-item mr-3">
                    
                    <NavLink to="/create-ticket">
                        <ButtonComponent
                        isset="false"
                        title="Create Tickets"
                        className="create-ticket-btn"
                        />
                    </NavLink>

                </li>
                <li className="nav-item mr-3">

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button type="button" className="btn">ENG</button>
                            <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu">
                            
                            
                            
                            <div role="separator" className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="">Separated link</NavLink>
                            </div>
                        </div>
                    
                    </div>

                </li>
                <li className="nav-item mr-4 position-relative">
                    <FaRegBell 
                     className="faBell"
                    />
                    <div className="badge"></div>
                </li>
                <li className="nav-item">
                    <div className="input-group-prepend name">
                        <img src="/761076.png" alt="" className="avatar mr-2" />
                        <p className="person-name">John Deo</p>
                        <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            

                            
                        <div role="separator" className="dropdown-divider"></div>
                            <NavLink className="dropdown-item" to="">Separated link</NavLink>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default NavBarTop;
