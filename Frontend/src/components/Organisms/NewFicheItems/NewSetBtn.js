import React from 'react';
import styled from 'styled-components';
import colors from '../../../constants/colors';

const StyledText = styled.h3`
    font-size:20px;
    font-weight:700;
    margin-bottom:20px;
    padding: 0 2px;
    border-bottom: 5px solid ${colors.secondary};
    transition: all 0.2s ease-in;
`

const Container = styled.div`
    height:150px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:7px;
    background-color:white;
    cursor: pointer;
    
    :hover ${StyledText}{
        border-bottom-color:${colors.secondaryDarken}
    }

    :active ${StyledText}{
        color: ${colors.secondaryDarken}
    }
`



const NewSetBtn = () => {
    const clickHandler = () =>{
        console.log('work');
    }

    return(
    <Container onClick={clickHandler}>
        <StyledText>+ Add Set</StyledText>
    </Container>
    )
}

export default NewSetBtn;