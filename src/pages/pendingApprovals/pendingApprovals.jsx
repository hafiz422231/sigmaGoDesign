import React from 'react'
import './pendingApprovals.css';
import {pendingApp} from '../../components/AppData/AppData';
import RightSideBar from '../../components/rightSideBar/rightSideBar';
import PendingApprovalItem from './pendingApprovalItem/pendingApprovalItem';
import HeadingTop from '../../components/headingTop/headingTop';


const PendingApprovals = () => {
    
    return (
        <div id="main-wrapper-pending-approves">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-12 col-lg-8 col-md-6 card-left">

                        <div className="details-heading">
                                                       
                            <HeadingTop heading="pending approvals" subHeading="203 Tickets" showField={false} />

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
                                pendingApp.map( ({ ...otherProps }) => (
                                    
                                    <div className="m-0 pl-3 pr-3" key={Math.random()}>
                                        <PendingApprovalItem {...otherProps} />
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

export default PendingApprovals;
