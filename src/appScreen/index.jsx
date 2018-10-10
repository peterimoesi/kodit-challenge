import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
    getApartments
} from './actions';

class AppScreen extends React.Component {
    componentDidMount() {
        this.props.getApartments();
    }

    render() {
        return (
            <div />
        );
    }
}

const mapStateToProps = ({ apartments }) => ({
    apartments
});

AppScreen.propTypes = {
    getApartments : PropTypes.func.isRequired
}; 

export default connect(mapStateToProps, { 
    getApartments
})(AppScreen);
