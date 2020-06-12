import React, {useState} from 'react';
import './StyledInput.scss';

const StyledInput = ({
    id,
    type="text",
    placeholder="",
    labelValue="",
}) => {
    const [value, setValue] = useState('');

    const onChangeHanlder = (e) => {
        setValue(e.target.value);
    };

    return(
    <div>
        <input 
            id={id}
            type={type} 
            onChange={onChangeHanlder}
            placeholder={placeholder}
            value={value} 
            className="input"
            />
        <label htmlFor={id} className="placeholder">
            {labelValue}
        </label>
    </div>
    );
}
    

export default StyledInput;