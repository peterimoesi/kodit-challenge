import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'mdbreact';

import { sort, reverse } from './actions';

class Sort extends React.Component {
    render() {
        return (
            <div>
                <div className="sort-by">
                Sort  By
                </div>
                <Row className="sort-comp">
                    <Col lg="3" md="3" sm="4" xs="6">
                        <Button
                            onClick={() => this.props.sort('size_sqm')}
                            outline={this.props.sortParams !== 'size_sqm'}
                        >Size</Button>
                    </Col>
                    <Col lg="3" md="3" sm="4" xs="6">
                        <Button
                            onClick={() => this.props.sort('price_sqm')}
                            outline={this.props.sortParams !== 'price_sqm'}
                        >Price</Button>
                    </Col>
                    <Col lg="3" md="3" sm="4" xs="6">
                        <Button
                            onClick={() => this.props.sort('built_year')}
                            outline={this.props.sortParams !== 'built_year'}
                        >Age</Button>
                    </Col>
                    <Col lg="3" md="3" sm="4" xs="6">
                        <Button
                            onClick={() => this.props.reverse()}
                            outline
                        >
                            <span>Order </span>
                            <i className={`fa fa-arrow-${this.props.sortAscending ? 'up' : 'down'}`}/>
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

Sort.propTypes = {
    sortParams : PropTypes.string.isRequired,
    sortAscending : PropTypes.bool.isRequired,
    sort : PropTypes.func.isRequired,
    reverse : PropTypes.func.isRequired
};

const mapStateToProps = ({ apartments }) => ({
    sortParams : apartments.sortParams,
    sortAscending : apartments.sortAscending
});

export default connect(mapStateToProps, { sort, reverse })(Sort);
