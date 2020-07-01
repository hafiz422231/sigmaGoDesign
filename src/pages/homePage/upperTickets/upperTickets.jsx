import React from 'react'
import './upperTickets.css';
import TicketStyle from './ticketStyle/ticketStyle';

const UpperTickets = () => {
    return (
        <div className="row" id="homepage-upper">
            
            <div id="homepage-upper-inner">

                <TicketStyle 
                 itemClassName="single-item"
                 src="home-icons/1d.png"
                 iconClassName="ticket-icon"
                 heading="All Tickets" 
                 count="1235" 
                 textIdName="all-ticket-container"
                 />

                <TicketStyle 
                 itemClassName="single-item"
                 src="home-icons/2d.png"
                 iconClassName="ticket-icon"
                 heading="Open Tickets" 
                 count="1235" 
                 textIdName="open-ticket-container"
                 />

                <TicketStyle 
                 itemClassName="single-item"
                 src="home-icons/3d.png"
                 iconClassName="ticket-icon"
                 heading="pending" 
                 count="1235" 
                 textIdName="pending-ticket-container"
                 />
                
                <TicketStyle 
                 itemClassName="single-item"
                 src="home-icons/4d.png"
                 iconClassName="ticket-icon"
                 heading="surveys" 
                 count="1235" 
                 textIdName="surveys-ticket-container"
                 />
                
            </div>

        </div>
    )
}

export default UpperTickets;
