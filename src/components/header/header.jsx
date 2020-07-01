import React from 'react'
import './header.css';
import NavBarTop from '../navbarTop/navBarTop';
import BottomAlerts from '../bottomAlerts/bottomAlerts';
import WelcomeField from '../welcomeField/welcomeField';


const Header = () => {
    return (
        <div className="container-fluid Header">
            
            <NavBarTop />
            
            <WelcomeField text="Welcome" />
            
            <BottomAlerts />

        </div>
    )
}

export default Header;
