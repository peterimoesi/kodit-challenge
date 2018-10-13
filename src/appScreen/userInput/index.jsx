import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BasicForm from './basicForm';
import ApartmentForm from './apartmentForm';
import { submitUserData } from './action';

class UserInput extends React.Component {
    static propTypes = {
        submitUserData : PropTypes.func.isRequired,
        getEvaluation : PropTypes.func.isRequired
    }
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.updateRef = this.updateRef.bind(this);
        this.validate = this.validate.bind(this);
        this.switchToggle = this.switchToggle.bind(this);
        this.formProgress = this.formProgress.bind(this);
        this.sumbitForm = this.sumbitForm.bind(this);
        this.formRef = null;
        this.state = {
            currentPage : 1,
            userData : {
                city : '',
                address : '',
                postcode : '',
                floor : '',
                totalFloors : '',
                size_sqm : '',
                room_count : '',
                maintainCost : '',
                built_year : '',
                landOwner : null,
                elevator : null,
                balcony : null,
                renovationFive : null,
                renovationTen : null,
                condition : 'Excellent'
            }
        };
    }

    onChange(e) {
        const { userData } = this.state;
        userData[e.target.name] = e.target.value;
        this.setState({ userData });
    }

    updateRef(e) {
        this.formRef = e;
    }

    validate() {
        let result = true;
        const required = this.formRef.querySelectorAll('.required');
        for (var i = 0; i < required.length; i++) {
            const elem = required[i];
            if (!elem.value) {
                elem.classList.add('invalid');
                elem.parentElement.classList.add('invalid-parent');
                result = false;
            } else if (elem.name === 'address' && !new RegExp('\\s(?=\\d)').test(elem.value)) {
                elem.parentElement.classList.add('invalid-parent');
                elem.classList.add('invalid');
                result = false;
            } else if (elem.name === 'postcode' && !new RegExp('^[0-9]+$').test(elem.value)) {
                elem.parentElement.classList.add('invalid-parent');
                elem.classList.add('invalid');
                result = false;
            }
            else {
                // elem.parent.classList.add
                elem.parentElement.classList.remove('invalid-parent');
                elem.classList.remove('invalid');
            }
        }
        return result;
    }

    formProgress() {
        if(this.validate()) {
            this.setState({ currentPage : 2 });
        }
    }

    sumbitForm() {
        if(this.validate()) {
            this.props.submitUserData(this.state.userData);
            this.props.getEvaluation();
        }
    }

    switchToggle(name, value) {
        const { userData } = this.state;
        userData[name] = value;
        this.setState({ userData });
    }
    
    render() {
        const {
            city,
            address,
            postcode,
            landOwner,
            elevator,
            balcony,
            renovationFive,
            renovationTen,
            size_sqm,
            built_year,
            maintainCost,
            condition,
            floor,
            room_count,
            totalFloors,
        } = this.state.userData;

        return (
            <div>
                <div style={{ textAlign : 'center', marginBottom : '50px' }}>Get Price Evalution form</div>
                <div className="progress-bar" style={{ width : `${(this.state.currentPage / 3) * 100}%` }} />
                {
                    this.state.currentPage === 1 ?
                        <BasicForm
                            city={city}
                            address={address}
                            postcode={postcode}
                            onChange={this.onChange}
                            updateRef={this.updateRef}
                            formProgress={this.formProgress}
                        /> : null
                }
                {
                    this.state.currentPage === 2 ?
                        <ApartmentForm
                            landOwner={landOwner}
                            elevator={elevator}
                            balcony={balcony}
                            renovationFive={renovationFive}
                            renovationTen={renovationTen}
                            size_sqm={size_sqm}
                            maintainCost={maintainCost}
                            built_year={built_year}
                            switchToggle={this.switchToggle}
                            onChange={this.onChange}
                            updateRef={this.updateRef}
                            condition={condition}
                            totalFloors={totalFloors}
                            room_count={room_count}
                            floor={floor}
                            submitForm={this.sumbitForm}
                        /> : null
                }
                
            </div>
        );
    }
}

export default connect(null, { submitUserData })(UserInput);
