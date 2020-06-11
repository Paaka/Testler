import React from 'react';
import './Button.scss';

const Button = ({
    onClickFn=(e) => console.log(e),
    children
    }) => (
    <button 
        onClick={onClickFn} 
        className="MainButton">
    {children}
    </button>
);

export default Button;