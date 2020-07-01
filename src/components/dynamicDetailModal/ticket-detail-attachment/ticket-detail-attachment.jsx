import React from 'react';
import './ticket-detail-attachment.css';
import ButtonComponent from '../../../components/button/buttonComponent';
import { FaPlus } from 'react-icons/fa';
import Attachments from '../../../components/attachments/attachments';

const TicketDetailAttachment = () => {
    return (
        <div className="attachments-wrapper-left p-3">
            
            <Attachments imageName={false} show={false} className="selectedImages" />

            <ButtonComponent 
             isset="true" 
             icon={<FaPlus className="attachment-icon" />} 
             title="Add Attachment" 
             className="add-attachment" />

            <div className="descrip">
                <span>Description</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi non tenetur aliquid! Nesciunt accusantium velit provident quas facere iste sunt, animi, est assumenda sint labore rem dolore nemo soluta perferendis?</p>
            </div>

        </div>
    )
}

export default TicketDetailAttachment;
