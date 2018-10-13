import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'mdbreact';


class PriceEvaluation extends React.Component{
    constructor() {
        super();
        this.state = {

        };
        this.condition = [
            'Excellent',
            'Good',
            'Decent',
            'Bad'
        ];
        this.getColor = this.getColor.bind(this);
    }

    getColor(value){
        //value from 0 to 1
        var hue=((1-value)*120).toString(10);
        return [`hsl(${hue},100%,50%)`].join('');
    }
    

    render () {
        const { userData } = this.props;
        const color = `${this.getColor( (this.condition.indexOf(this.props.userData.condition) + 1) / this.condition.length)}`;
        return (
            <Row>
                <Col lg="6" md="6" sm="12" xs="12" className="price-eval">
                    <div className="value-circle" style={{
                        borderColor : color
                    }}>
                        <h5
                            style={{
                                color : color
                            }}
                        >
                            {userData.condition}
                        </h5>
                    </div>
                    <h3>
                    Price estimate : {userData.cost ? userData * 1000 : 600000}{'\u20AC'}
                    </h3>
                    <div>View more info</div>
                </Col>
                <Col lg="6" md="6" sm="12" xs="12">
                    <div className="apart-eval-details">
                        <div><span>City :</span> {userData.city}</div>
                        <div><span>Address :</span> {userData.address}, {userData.postCode}</div>
                        <div><span>Floor :</span> {userData.floor}</div>
                        <div><span>Rooms :</span> {userData.room}</div>
                        <div><span>Built year :</span> {userData.built_year}</div>
                        <div><span>Maintenance cost :</span> {userData.maintainCost}</div>
                    </div>
                </Col>
            </Row>
        );
    }
}

PriceEvaluation.propTypes = {
    userData : PropTypes.object.isRequired
};

export default PriceEvaluation;
