import React from 'react';
import './ApprovalInformation.css';



const ApprovalInformation = () => {
    return (
        <div id="information-wrapper">
            
            <h6 className="heading">Approval Information</h6>
            
            <div className="approval-info">
                <div className="ticket-num">
                    <span>12345</span>
                    <p>Approval ID</p>
                </div>
            </div>

            <div className="approval-info">
                <div className="availability">
                    <span>Not Available</span>
                    <p>Deadline</p>
                </div>
            </div>

            <div className="approval-info">
                <div className="descrip">
                    <span>Description</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non tenetur aliquid! Nesciunt accusantium velit provident quas facere iste sunt, animi, est assumenda sint labore rem dolore nemo soluta perferendis?</p>
                </div>

            </div>
        </div>
    )
}

export default ApprovalInformation;
