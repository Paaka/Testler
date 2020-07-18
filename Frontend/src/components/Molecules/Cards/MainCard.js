import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import Paragraph from '../../Atoms/Typography/Paragraph/Paragraph';

import {Fonts, FontsWeights} from '../../../constants/fonts';
import colors from '../../../constants/colors';
import DivImage from '../../Atoms/DivImage/DivImage';
import userImage from '../../../assets/user.svg';


const Container = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    width:100%;
    height:100%;
    background-color:white;
    border-radius:5px;
    border:1px solid #ddd;
    padding:15px;
    transition: border-bottom 0.4s;
   

    :hover{
        border-bottom: 3px solid ${colors.secondary};
    }
`



const Heading = styled.h3`
    font-family:${Fonts.montserrat};
    font-weight:${FontsWeights.montserrat.bold};
    font-size:20px;
    color: #444;
`

const SubText = styled.h4`
    font-size:12px;
    color:#999;
    font-family:${Fonts.montserrat};
    font-weight:${FontsWeights.montserrat.medium};
`

const UserWrapper = styled.div`
    position:absolute;
    bottom:15px;
    display:flex;
    align-items:center;
`

const RightMargin = styled.div`
    margin-left:5px;
`

const MainCard = ({card, linkPath}) => {
    return (
        <NavLink style={{textDecoration:"none"}} to={linkPath}>
            <Container>
                <div>
                <Heading>Zestaw</Heading>
                <SubText>22 pojęcia</SubText>
                </div>
                <UserWrapper>
                    <DivImage height={25} width={25} path={userImage}/>
                    <RightMargin>
                        <Paragraph color="black">User</Paragraph>
                    </RightMargin>
                </UserWrapper>
            </Container>
        </NavLink>
    )
}

export default MainCard;