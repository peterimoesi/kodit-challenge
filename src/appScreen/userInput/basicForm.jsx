import React from 'react';
import PropTypes from 'prop-types';
import {
    Button
} from 'mdbreact';

import Input from '../../globalComp/input';
import './styles.scss';

const cities = [
    'Helsinki',
    'Espoo',
    'Turku',
    'Tallinn',
    'Abuja'
];

const basicForm = ({
    city,
    onChange,
    address,
    postcode,
    updateRef,
    formProgress
}) => (
    <div className="form-cont basic-form" ref={updateRef}>
        <div className="form-group">
            <select
                name="city"
                className="form-control select required"
                value={city}
                onChange={onChange}
                id="cities"
            >
                <option key="default" disabled hidden value="">Cities *</option>
                {
                    cities.map(city => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))
                }
            </select>
        </div>
        <Input
            label="Address *"
            name="address"
            onChange={onChange}
            value={address}
            className="required"
            errorMessage="please enter a valid address"
        />
        <Input
            label="Postcode *"
            name="postcode"
            onChange={onChange}
            value={postcode}
            className="required"
            errorMessage="please enter a valid postcode"
        />
        <Input
            label="If you have listed your apartment in a portal, please paste the URL here "
        />
        <div className="final-cta">
            <Button
                color="deep-purple"
                onClick={formProgress}
            >
                Get price valuation
            </Button>
        </div>
    </div>
);

basicForm.propTypes = {
    onChange : PropTypes.func.isRequired,
    city : PropTypes.string.isRequired,
    address : PropTypes.string.isRequired,
    postcode : PropTypes.string.isRequired,
    updateRef : PropTypes.func.isRequired,
    formProgress : PropTypes.func.isRequired
};

export default basicForm;
