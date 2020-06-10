import React from 'react';
import './StyledInput.scss';

const StyledInput = ({
    id,
    type="text",
    placeholder="",
    value="",
    labelValue="",
}) => (
    <div>
        <input 
            id={id} 
            type={type} 
            placeholder={placeholder}
            value={value} 
            className="input"
            />
        <label htmlFor={id} className="placeholder">
            {labelValue}
        </label>
    </div>
);

export default StyledInput;