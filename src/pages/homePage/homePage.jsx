import React from 'react'
import './homePage.css';
import RightSideBar from '../../components/rightSideBar/rightSideBar';
import { tickets } from '../../components/AppData/AppData';
import { Link } from 'react-router-dom';
import UpperTickets from './upperTickets/upperTickets';
import HomeEvaluationChart from './homeEvaluationChart/homeEvaluationChart';

const HomePage = () => {
    return (
        <div id="main-wrapper-my-tickets-homepage">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-12 col-lg-8 col-md-6 card-left">

                        <UpperTickets />
                        <HomeEvaluationChart />
                        
                        <div className="box-shadow">

                            <div className="row pl-3 pr-3">
                                
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <span id="heading-my-tic">My Tickets</span>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-right">
                                    <Link to="/" id="view-all">
                                        View All
                                    </Link>
                                </div>

                                
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <hr />
                                    {
                                        tickets.slice(0,4).map(t=> (
                                            <>
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
                                                    <span className="subject">{t.ticketSubject}</span>
                                                    <p className="text">{t.text}</p>
                                                </div>
                                                
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 pt-2">
                                                    <span className={t.status === 'pending' ?
                                                                     'pending' : t.status === 'approved' ? 'approved' : 
                                                                     t.status === 'closed' ? 'closed' : null
                                                                     }>
                                                        {t.status}
                                                    </span>
                                                </div>
                                                
                                                <div className="col-12 col-sm-12 col-md-3 col-lg-2 col-xl-2 text-right pt-2">
                                                    <span className="ticketHash">{t.ticketHash}</span>
                                                </div>
                                            
                                            </div>
                                            <hr /></>
                                        ))
                                    }
                                </div>

                            </div>   
                          
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

export default HomePage;
