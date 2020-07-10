import React from 'react';
import Paragraph from '../../Atoms/Typography/Paragraph/Paragraph';
import DivImage from '../../Atoms/DivImage/DivImage';
import colors from '../../../constants/colors';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: all .2s;

    &:hover{
        background-color:${colors.primaryLight};
        border-radius: 20px;
    }
`

const ButtonWithLabel = ({children, onClickFn = ()=>{}, path}) =>{
    const onClickHandler = (e) => {
        onClickFn();
    }

    return(
        <Wrapper onClick={onClickHandler}>
            <DivImage path={path}/>
            <Paragraph>{children}</Paragraph>
        </Wrapper>
    )
}

export default ButtonWithLabel;