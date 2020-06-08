import React from 'react';
import Paragraph from '../../Atoms/Typography/Paragraph/Paragraph';
import DivImage from '../../Atoms/DivImage/DivImage';

const ButtonWithLabel = ({children, path}) =>{
    return(
        <div>
            <DivImage path={path}/>
            <Paragraph>{children}</Paragraph>
        </div>
    )
}

export default ButtonWithLabel;