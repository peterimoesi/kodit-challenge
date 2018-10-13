
import React from 'react';
import { Input } from 'mdbreact';

const inputComp = (props) => (
    <div className="input-cont">
        <Input {...props} />
        <div className="error-message">{props.errorMessage}</div>
    </div>
    
);

export default inputComp;
