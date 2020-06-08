import React from 'react';
import Paragraph from '../../Atoms/Typography/Paragraph/Paragraph';
import DivImage from '../../Atoms/DivImage/DivImage';
import './ButtonWithLabel.scss';

const ButtonWithLabel = ({children, onClickFn = ()=>{}, path}) =>{
    const onClickHandler = (e) => {
        onClickFn();
    }

    return(
        <div className="ButtonWithLabel" onClick={onClickHandler}>
            <DivImage path={path}/>
            <Paragraph>{children}</Paragraph>
        </div>
    )
}

export default ButtonWithLabel;