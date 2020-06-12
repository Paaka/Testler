import React from 'react';
import './ButtonIcon.scss';

const ButtonIcon = ({icon, alt, onClickFn}) => {
    const onClickHandler = () => {
        onClickFn();
    }

    return (<div className="ButtonIcon--wrapper"><img src={icon}
                onClick={onClickHandler}
                alt={alt}
                className='ButtonIcon' /></div>) 
}

export default ButtonIcon;