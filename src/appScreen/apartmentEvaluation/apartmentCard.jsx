import React from 'react';
import { Col } from 'mdbreact';
import PropTypes from 'prop-types';

const apartmentCard = ({ 
    street,
    street_number,
    room_count,
    size_sqm,
    description,
    built_year,
    price_sqm
}) => (
    <Col lg="4" md="4" sm="6" xs="10">
        <div className="apartment-card">
            <div className="img-cont">{
                <img src={require(`../../globalComp/imgs/house${Math.floor(Math.random() * 4) + 1}.jpg`)} alt="house" />
            }</div>
            <div className="details">
                <div>Description : {description}</div>
                <div>{street} {street_number}</div>
                <div>
                    <span>Rooms : {room_count} |</span>
                    <span> Year : {built_year}</span>
                </div>
                <div>
                    <span>Size : {size_sqm} / sqm |</span>
                    <span> Prize : {Math.floor(price_sqm)} / sqm</span>
                </div>
               
            </div>
        </div>
        
    </Col>
);

apartmentCard.propTypes = {
    street : PropTypes.string.isRequired,
    street_number : PropTypes.number.isRequired,
    room_count : PropTypes.number.isRequired,
    size_sqm : PropTypes.number.isRequired,
    description : PropTypes.string.isRequired,
    built_year : PropTypes.number.isRequired,
    price_sqm : PropTypes.number.isRequired
};

export default apartmentCard;
