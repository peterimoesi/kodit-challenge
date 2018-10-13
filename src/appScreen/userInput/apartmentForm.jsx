import React from 'react';
import PropTypes from 'prop-types';
import {
    Button
} from 'mdbreact';
import Input from '../../globalComp/input';

import SwitchButton from '../../globalComp/switchButton';
import './styles.scss';

const conditionArr = [
    'Excellent',
    'Good',
    'Decent',
    'Bad'
];

const apartmentForm = ({
    floor,
    totalFloors,
    size_sqm,
    room_count,
    maintainCost,
    built_year,
    landOwner,
    elevator,
    balcony,
    renovationFive,
    renovationTen,
    condition,
    updateRef,
    onChange,
    switchToggle,
    submitForm
}) => (
    <div className="form-cont" ref={updateRef}>
        <div className="row">
            <div className="form-group col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="select-cont">
                    <label htmlFor="floor">Floor</label>
                    <select
                        name="floor"
                        className="form-control select"
                        value={floor}
                        onChange={onChange}
                        id="floor"
                    >
                        {
                            [...Array(8), '9+'].map((empty, i) => (
                                <option key={i} value={i + 1}>
                                    { i === 8 ? empty : i + 1}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="form-group col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="select-cont">
                    <label htmlFor="totalFloor">Total floors</label>
                    <select
                        name="totalFloors"
                        className="form-control select"
                        value={totalFloors}
                        onChange={onChange}
                        id="totalFloor"
                    >
                        {
                            [...Array(8), '9+'].map((empty, i) => (
                                <option key={i} value={i + 1}>
                                    { i === 8 ? empty : i + 1}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="form-group col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="select-cont">
                    <label htmlFor="rooms">Number of rooms</label>
                    <select
                        name="room_count"
                        className="form-control select"
                        value={room_count}
                        onChange={onChange}
                        id="rooms"
                    >
                        {
                            [...Array(8), '9+'].map((empty, i) => (
                                <option key={i} value={i + 1}>
                                    { i === 8 ? empty : i + 1}
                                </option>
                            ))
                        }
                    </select>
                </div>
                
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <Input
                    label="Living area size"
                    className="required"
                    name="size_sqm"
                    onChange={onChange}
                    value={size_sqm}
                />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <Input
                    label="Construction year"
                    className="required"
                    name="built_year"
                    onChange={onChange}
                    value={built_year}
                />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <Input
                    label="Maintenance cost (€/mk)"
                    className="required"
                    name="maintainCost"
                    onChange={onChange}
                    value={maintainCost}
                />
            </div>
        </div>
        <SwitchButton
            label="Land ownership"
            button1Label="Own"
            button2Label="Rented"
            name="landOwner"
            value={landOwner}
            toggle={switchToggle}
        />
        <SwitchButton
            label="Is there an elevator in the building"
            button1Label="Yes"
            button2Label="No"
            name="elevator"
            value={elevator}
            toggle={switchToggle}
        />
        <SwitchButton
            label="Is there balcony in the apartment"
            button1Label="yes"
            button2Label="No"
            name="balcony"
            value={balcony}
            toggle={switchToggle}
        />
        <SwitchButton
            label="Is there pipe renovation planned within 10 years"
            button1Label="Yes"
            button2Label="No"
            name="renovationTen"
            value={renovationTen}
            toggle={switchToggle}
        />
        <SwitchButton
            label="Is there facade renovation planned within 5 years"
            button1Label="Yes"
            button2Label="No"
            name="renovationFive"
            value={renovationFive}
            toggle={switchToggle}
        />
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div>Apartment condition</div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <select
                    name="condition"
                    className="form-control select"
                    value={condition}
                    onChange={onChange}
                    id="condition"
                >
                    {
                        conditionArr.map((cond, i) => (
                            <option key={cond} value={cond}>
                                {cond}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
        <div className="final-cta">
            <Button
                color="deep-purple"
                onClick={submitForm }
            >
                Get price valuation
            </Button>
        </div>
    </div>
);

apartmentForm.propTypes = {
    floor : PropTypes.string.isRequired,
    totalFloors : PropTypes.string.isRequired,
    size_sqm : PropTypes.string.isRequired,
    room_count : PropTypes.string.isRequired,
    maintainCost : PropTypes.string.isRequired,
    built_year : PropTypes.string.isRequired,
    switchToggle : PropTypes.func.isRequired,
    landOwner : PropTypes.bool,
    elevator : PropTypes.bool,
    balcony : PropTypes.bool,
    renovationFive : PropTypes.bool,
    renovationTen : PropTypes.bool,
    condition : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    updateRef : PropTypes.func.isRequired,
    submitForm : PropTypes.func.isRequired
};

apartmentForm.defaultProps = {
    landOwner : null,
    elevator : null,
    balcony : null,
    renovationFive : null,
    renovationTen : null
};

export default apartmentForm;
