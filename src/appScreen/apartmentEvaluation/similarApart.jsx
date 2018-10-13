import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'mdbreact';

import Sort from './sort';

import ApartmentCard from './apartmentCard';

const SimilarApartments = ({
    apartments
}) => (
    <div className="similar-apartments">
        <div><h4>Similar apartments to yours</h4></div>
        <Sort />
        <Row>
            {
                apartments.map((aprt, i) => (
                    <ApartmentCard
                        key={i}
                        {...aprt}
                    />
                ))
            }
        </Row>
    </div>
);


SimilarApartments.propTypes = {
    apartments : PropTypes.array.isRequired
};


export default SimilarApartments;
