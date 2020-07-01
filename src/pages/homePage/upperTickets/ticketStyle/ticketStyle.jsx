import React from 'react'


const TicketStyle = (props) => {
    return (
        <div className={props.itemClassName}>
            <img src={props.src} alt="" className={props.iconClassName} />
            <div id={props.textIdName}>
                <span>{props.heading}</span>
                <p>{props.count}</p>
            </div>
        </div>
    )
}

export default TicketStyle;
