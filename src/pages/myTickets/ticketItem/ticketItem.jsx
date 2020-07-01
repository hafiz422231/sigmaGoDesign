import React, {useState} from 'react'
import './ticketItem.css';
import { FaChevronRight } from 'react-icons/fa';
import TicketDetailModal from '../ticketDetailModal/ticketDetailModal';
import DynamicDetailModal from '../../../components/dynamicDetailModal/dynamicDetailModal';

const TicketItem = ({ ticketHash , ticketSubject , text , status , assignTo , date }) => {
    
    const [ showTicketDetail , setShowTicketDetail ] = useState(false);
    
    return (
        <>
        <div className="link-separate" onClick={() => setShowTicketDetail(true)}>
            
                                            <div className="row all-lists-tickets">
                                                
                                                <div className="col-lg-2 col-xl-2 col-sm-12 col-12 col-md-4 hash-number">
                                                    <span className="">{ticketHash}</span>
                                                </div>
                                                
                                                <div className="col-lg-4 col-xl-4 col-sm-12 col-12 col-md-6 toc">
                                                    <span className="subject">{ticketSubject}</span>
                                                    <span className="text">{text}</span>
                                                </div>
                                                
                                                <div className="col-lg-2 col-xl-2 col-sm-12 col-12 col-md-4 pt-2">
                                                    <span className="status-btn"></span>
                                                    <span className={status === 'pending' ?
                                                                     'pending' : status === 'approved' ? 'approved' : 
                                                                     status === 'closed' ? 'closed' : null
                                                                     }>
                                                        {status}
                                                    </span>
                                                </div>
                                                
                                                <div className="col-lg-2 col-xl-2 col-sm-12 col-12 col-md-4 pt-2">
                                                    <span className="assign-to">{assignTo}</span>
                                                </div>
                                                
                                                <div className="col-lg-2 col-xl-2 col-sm-12 col-12 col-md-2 pt-2 pl-1">
                                                    <span className="date">{date}</span>
                                                    <span><FaChevronRight className="fachevron" /></span>
                                                </div>

                                            </div>
                
                                        </div>
                
            <TicketDetailModal
             show={showTicketDetail} 
             onHide={() => setShowTicketDetail(false)}
            />

        </>
    )
}

export default TicketItem;
