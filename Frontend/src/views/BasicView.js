import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import VerticalSidebar from '../components/Organisms/Sidebar/VerticalSidebar';
import colors from '../constants/colors';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
    background-color: ${colors.white};
    width:100vw;
    height:90vh;
`

const BasicView = () => {
    return (
        <MainTemplate>
            <BackgroundWrapper>
                <VerticalSidebar/>
            </BackgroundWrapper>
        </MainTemplate>
    );
};

export default BasicView;