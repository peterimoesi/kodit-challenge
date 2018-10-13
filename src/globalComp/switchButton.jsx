import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'mdbreact';

import './switch.scss';

const switchButton = ({
    label,
    name,
    button1Label,
    button2Label,
    toggle,
    value
}) => (
    <Row className="switch-button">
        <Col lg="6" md="6" sm="12" xs="12">
            <div>
                {label}
            </div>
        </Col>
        <Col lg="6" md="6" sm="12" xs="12">
            <Row>
                <Col lg="6" md="6" sm="6" xs="6">
                    <Button
                        onClick={() => toggle(name, true)}
                        color="info"
                        outline={value !== true}
                    >
                        {button1Label}
                    </Button>
                </Col>
                <Col lg="6" md="6" sm="6" xs="6">
                    <Button
                        color="info"
                        outline={value !== false}
                        onClick={() => toggle(name, false)}
                    >
                        {button2Label}
                    </Button>
                </Col>
            </Row>
        </Col>
    </Row>
);

switchButton.propTypes = {
    label : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    button1Label : PropTypes.string.isRequired,
    button2Label : PropTypes.string.isRequired,
    toggle : PropTypes.func.isRequired,
    value : PropTypes.bool
};

switchButton.defaultProps = {
    value : null
};

export default switchButton;
