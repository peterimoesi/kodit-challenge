import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PriceEval from './priceEval';
import SimilarApartments from './similarApart';
import DataVisualize from './dataVisualize';

import './styles.scss';

class Apartments extends React.Component {
    render() {
        return (
            <div>
                <div className="progress-bar" style={{ width : `${100}%` }} />
                <PriceEval
                    userData={this.props.userData}
                />
                <DataVisualize apartments={this.props.apartments} />
                <SimilarApartments
                    apartments={this.props.apartments}
                />
            </div>
        );
    }
}

const mapStateToProps = ({ apartments }) => ({
    userData : apartments.userData,
    apartments : apartments.apartments
});

Apartments.propTypes = {
    userData : PropTypes.object.isRequired,
    apartments : PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Apartments);