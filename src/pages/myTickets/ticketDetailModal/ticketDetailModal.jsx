import React from 'react'
import './ticketDetailModal.css';
import { Modal } from 'react-bootstrap';
import ButtonComponent from '../../../components/button/buttonComponent';
import { FaTimes } from 'react-icons/fa';

import Comments from '../comments/comments';
import TicketDetailAttachment from '../ticket-detail-attachment/ticket-detail-attachment';


const TicketDetailModal = ({ onHide, ...props }) => {

    return (
        <Modal
          {...props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          >
          <Modal.Header className="modal-Header p-0">
            <Modal.Title id="contained-modal-title-vcenter">
              
              <div className="detail-header row">
                
                <FaTimes className="close-detail" onClick={onHide} />
                
                <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12 col-12 m-0" >

                  <div id="ticket-number">                    
                    <h4>10255</h4>
                    <span>Ticket Number</span>
                  </div>

                </div>
                
                <div className="col-lg-8 col-xl-8 col-md-8 col-sm-12 col-12 m-0">

                  <div className="subject-details-wrapper">

                    <div className="sub">
                      <label className="label">Subject:</label>
                      <span className="span">Urgent Issue</span>
                    </div>
                    
                    <div className="sub">
                      <label className="label">Assign To:</label>
                      <span className="span">John Dei</span>
                    </div>
                    
                    <div className="status">
                      <label className="label mr-3">Status:</label>
                      <span className="status-style">approved</span>
                    </div>
                    
                    <div className="sub">
                      <div className="service-category-subcat">
                        <span>{`Service`} / {`Category`} / {`SubCategory`}</span>
                        <ButtonComponent title="withdraw ticket" isset="false" className="withdraw-ticket-btn" />
                      </div>
                    </div>
                
                  </div>
                
                </div>

              </div>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

              <div className="ticket-detail-body row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                  <TicketDetailAttachment />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-8">
                  <Comments />
                </div>
              </div>
            
          </Modal.Body>
          
          
        </Modal>
    )
}

export default TicketDetailModal;
