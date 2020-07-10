import React from 'react';
import styled from 'styled-components';
import colors from '../../../constants/colors';

const Btn = styled.button`
    padding: 15px 25px;
    background-color: ${colors.secondary};
    font-size: 16px;
    text-transform:uppercase;
    color:white;
    border:none;
    border-radius: 5px;
    transition: background-color 0.15s cubic-bezier(0.6, -0.28, 0.735, 0.045);

    &:focus{
        outline: none;
    }

    &:hover{
        background-color: ${colors.secondaryDarken};
    }
`

const Button = ({
    onClickFn=(e) => console.log(e),
    children
    }) => (
    <Btn 
        onClick={onClickFn} >
    {children}
    </Btn>
);

export default Button;