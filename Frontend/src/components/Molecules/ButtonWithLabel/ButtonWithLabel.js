import React from 'react';
import Paragraph from '../../Atoms/Typography/Paragraph/Paragraph';
import DivImage from '../../Atoms/DivImage/DivImage';
import colors from '../../../constants/colors';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: all .2s;
    margin:0px 10px;

    &:hover{
        background-color:${colors.primaryLight};
        border-radius: 20px;
    }
`

const TextContainer = styled.div`
    margin-left:5px;
`

const ButtonWithLabel = ({children, onClickFn = ()=>{}, path}) =>{
    const onClickHandler = (e) => {
        onClickFn();
    }

    return(
        <Wrapper onClick={onClickHandler}>
            <DivImage path={path}/>
            <TextContainer>
                <Paragraph>{children}</Paragraph>
            </TextContainer>
        </Wrapper>
    )
}

export default ButtonWithLabel;