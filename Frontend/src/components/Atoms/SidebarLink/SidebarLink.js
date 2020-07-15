import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../../constants/colors';



const Wrapper = styled.div`
    display:flex;
    width:100%;
    height:2rem;
    background-color:white;
    align-items:center;
    padding:10px;
    cursor: pointer;
    transition:0.2s background-color;
    margin-top:2px;

    :hover{
        background-color:${colors.secondaryDarken};
    }
`

const StyledText = styled.p`
    font-family: 'Montserrat Alternates', sans-serif;
    font-weight:700;
    color:black;
    margin-left:10px;

    :visited{
        color:black;
    }
`

const StyledImage = styled.img`
    width:20px;
    height:20px;
`

const SidebarLink = ({children,icon,linkPath="/"}) => (
    <NavLink style={{textDecoration:'none'}} to={linkPath}>
        <Wrapper>
            <StyledImage src={icon}/>
            <StyledText>{children}</StyledText>
        </Wrapper>
    </NavLink>
)

export default SidebarLink;