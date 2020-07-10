import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
 display: flex;
    justify-content: center;
    align-items: center;
    width:20px;
    height: 20px;
    padding: 20px;
    transition: all 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045);

    &:hover{
        background-color: #ccc;
        border-radius: 50%;
    }

    &:active{
        background-color: #aaa;
    }
`

const BtnIcon = styled.img`
    width:25px;
    height: 25px;
`;

const ButtonIcon = ({icon, alt, onClickFn}) => {
    const onClickHandler = () => {
        onClickFn();
    }

    return (<Wrapper>
                <BtnIcon 
                src={icon}
                onClick={onClickHandler}
                alt={alt}/>
            </Wrapper>) 
}

export default ButtonIcon;