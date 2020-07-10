import React, {useState} from 'react';
import styled from 'styled-components';
import colors from '../../../constants/colors';

const StyledLabel = styled.label`
    font-size: 14px;
    font-weight: 700;
    color:#333;
    text-transform: uppercase;
`

const Input = styled.input`
    width: 100%;
    height: 26px;
    border:none;
    padding-bottom: 3px;
    border-bottom: 3px solid #666;
    background-color: transparent;
    transition: all .25s;

    &::placeholder{
        font-weight: 300;
    }

    &:focus{
        outline:none;
        border-bottom: 3px solid ${colors.secondary};    
    }
`


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
        <Input
            id={id}
            type={type} 
            onChange={onChangeHanlder}
            placeholder={placeholder}
            value={value} 
           
            />
        <StyledLabel htmlFor={id}>
            {labelValue}
        </StyledLabel>
    </div>
    );
}
    

export default StyledInput;