import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import VerticalSidebar from '../components/Organisms/Sidebar/VerticalSidebar';
import colors from '../constants/colors';
import styled from 'styled-components';
import StyledH2 from '../components/Atoms/Typography/H2/H2';
import MainCard from '../components/Molecules/Cards/MainCard';

const BackgroundWrapper = styled.div`
    background-color: ${colors.white};
    width:100vw;
    min-height:90vh;
    display:flex;
`

const RightPartWrapper = styled.div`
    width:100%;
    height:90vh;
    padding:20px;
    
`

const GridWrapper = styled.div`
    margin-top:15px;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap:10px;
    width:60%;
    height:60%;
`

const BasicView = () => {
    return (
        <MainTemplate>
            <BackgroundWrapper>
                <VerticalSidebar/>
                <RightPartWrapper>
                    <StyledH2 color="Black">Your's last viewed sets :</StyledH2>
                    <GridWrapper>
                        <MainCard linkPath="/set/0"/>
                        <MainCard linkPath="/set/0"/>
                        <MainCard linkPath="/set/0"/>
                        <MainCard linkPath="/set/0"/>
                    </GridWrapper>
                </RightPartWrapper>
            </BackgroundWrapper>
        </MainTemplate>
    );
};

export default BasicView;