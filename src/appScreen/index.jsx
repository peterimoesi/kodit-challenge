import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    getApartments
} from './actions';

import Evaluation from './apartmentEvaluation';
import UserInput from './userInput';

class AppScreen extends React.Component {
    constructor() {
        super();
        this.getEvaluation = this.getEvaluation.bind(this);
        this.state = {
            getEvaluation : false
        };
    }
    componentDidMount() {
        this.props.getApartments();
    }

    getEvaluation() {
        this.setState({ getEvaluation : true });
    }

    render() {
        return (
            <div>
                <h3 style={{ textAlign : 'center', marginBottom : '50px' }}>Kodi.io test</h3>
                {this.state.getEvaluation ?
                    <Evaluation apartments={this.props.apartments} /> :
                    <UserInput getEvaluation={this.getEvaluation} />
                }
            </div>
        );
    }
}

const mapStateToProps = ({ apartments }) => ({
    apartments : apartments.apartments
});

AppScreen.propTypes = {
    getApartments : PropTypes.func.isRequired,
    apartments : PropTypes.array.isRequired
}; 

export default connect(mapStateToProps, { 
    getApartments
})(AppScreen);
