import React from 'react'
import {Link} from 'react-router-dom';

const QuickLinks = (props) => {
    return (
        <div className="d-flex">
            {props.icon}
                <Link to="" className={`${props.className}`}>
                    {props.title}
                </Link>
            </div>
    )
}

export default QuickLinks;
