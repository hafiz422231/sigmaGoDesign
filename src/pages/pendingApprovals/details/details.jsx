import React from 'react'
import './details.css';
import ButtonComponent from '../../../components/button/buttonComponent';

const Details = () => {

    return (
        <div className="details-wrapper">
            <p className="pl-3 pt-2">Details</p>

            <div className="row pl-3">

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" id="para">

                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis, vero blanditiis quaerat culpa itaque quas. Quos explicabo sapiente quisquam ut quaerat nesciunt atque, pariatur deleniti omnis. Voluptate, optio fugit?</span>       
                    <br /><br /><br />
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium debitis similique voluptas dignissimos quibusdam recusandae aut ut. Consequatur iure officia perferendis, perspiciatis eveniet, omnis laboriosam modi illum sunt autem suscipit.</span>

                </div>
                
            </div>

            <div className="details-bottom-btns">
                <ButtonComponent title="deny" isset="false" className="deny-btn" />
                <ButtonComponent title="approve" isset="false" className="approve-btn" />
            </div>

        </div>
    )
}

export default Details;
