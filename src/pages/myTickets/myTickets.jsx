import React from 'react'
import './myTickets.css';
import RightSideBar from '../../components/rightSideBar/rightSideBar';
import TicketItem from './ticketItem/ticketItem';
import { tickets } from '../../components/AppData/AppData';
import HeadingTop from '../../components/headingTop/headingTop';

const MyTickets = () => {

    return (
        <div id="main-wrapper-my-tickets">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-12 col-lg-8 col-md-6 card-left">

                        <div className="details-heading">
                            
                            <HeadingTop heading="my tickets" subHeading="203 Tickets" showField={false} />
                            
                            <hr />
                            
                            <div className="row m-0 pb-3 pl-2 pt-1" id="details-heading-inner">
                                <div className="col-lg-2 col-xl-2 col-sm-12 col-12 col-md-4">
                                    <span>#</span>
                                </div>
                                <div className="col-lg-4 col-xl-4 col-sm-12 col-12 col-md-6 pl-2">
                                    <span>Ticket</span>
                                </div>
                                <div className="col-lg-2 col-xl-2 col-sm-12 col-12 col-md-4">
                                    <span>Status</span>
                                </div>
                                <div className="col-lg-2 col-xl-2 col-sm-12 col-12 col-md-4">
                                    <span className="assign-tag">Assign To</span>
                                </div>
                                <div className="col-lg-2 col-xl-2 col-sm-12 col-12 col-md-2">
                                    <span>Date</span>
                                </div>
                            </div>
                        </div>

                        <div className="box-shadow">

                            {
                                tickets.map( ({ ...otherProps }) => (
                                    
                                    <div className="m-0 pl-3 pr-3" key={Math.random()}>
                                        <TicketItem {...otherProps} />
                                        <hr />
                                    </div>
                                ))
                            }
                          
                        </div>

                    </div>
                    <div className="col-sm-12 col-12 col-lg-4 col-md-6 card-right">
                        <RightSideBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyTickets;
