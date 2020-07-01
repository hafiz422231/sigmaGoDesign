import React from 'react'
import './rightSideBar.css';
import {Link} from 'react-router-dom';
import QuickLinks from './quickLinks/quickLinks';
import { FaChevronRight , FaLock, FaWifi , FaUsers , FaPage4 } from 'react-icons/fa';


const RightSideBar = () => {
    return (
        <div className="container-fluid m-0 p-0" id="right-side-bar">
        <div className="row m-0 p-0">
            
            <div className="col-lg-12 col-12 col-md-12 col-sm-12 box mb-4">
                <div className="side-top-container">
                    <p className="text-quick-links">Quick Links</p><hr />
                    
                    <QuickLinks 
                     title="Report an Issue" 
                     icon={<FaPage4 className="icon" style={{backgroundColor: 'red'}} />} 
                     className="upper-links"
                     />

                    <QuickLinks 
                     title="Reset Password" 
                     icon={<FaLock className="icon" style={{backgroundColor: 'blue'}} />} 
                     className="upper-links"
                     />

                    <QuickLinks 
                     title="Network Account" 
                     icon={<FaWifi className="icon" style={{backgroundColor: 'skyblue'}} />} 
                     className="upper-links"
                     />

                    <QuickLinks 
                     title="Audio/Video Conferencing" 
                     icon={<FaUsers className="icon" style={{backgroundColor: 'orange'}} />} 
                     className="upper-links"
                     />

                    
                </div>
            </div>
            
            <div className="col-lg-12 col-12 col-md-12 col-sm-12 box">
                <div className="side-bottom-container">

                    <p className="text-helpful-articles">Helpful Articles</p><hr />
                    
                    <div className="d-flex flex-column">
                        <h6>Link 01</h6>
                        <p className="m-0">Ticket description lorem is simply</p>
                    </div><hr />

                    <div className="d-flex flex-column position-relative">
                        <h6>Link 01</h6>
                        <p className="m-0">Ticket description lorem is simply <Link to="" className="link">Read more...</Link></p>
                        <FaChevronRight className="chevron" />
                    </div><hr />

                    <div className="d-flex flex-column position-relative">
                        <h6>Link news</h6>
                        <p className="m-0">Ticket description lorem is simply <Link to="" className="link">Read more...</Link></p>
                        <FaChevronRight className="chevron" />
                    </div><hr />

                    <div className="d-flex flex-column position-relative">
                        <h6>Quick Link</h6>
                        <p className="m-0">Ticket description lorem is simply <Link to="" className="link">Read more...</Link></p>
                        <FaChevronRight className="chevron" />
                    </div><hr />
                
                </div>
            </div>
        
        </div>
        </div>
    )
}

export default RightSideBar;
