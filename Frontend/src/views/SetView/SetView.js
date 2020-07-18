import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import styled from 'styled-components';
import H2 from '../../components/Atoms/Typography/H2/H2';
import { FontsWeights } from '../../constants/fonts';
import colors from '../../constants/colors';

const Container = styled.div`
    width:100%;
    height:90vh;
    padding:40px 100px;
    display:flex;
    flex-direction:column;
`

const Navigation = styled.div`
    width:20%;
    height:100%;
`

const CardWrapper = styled.div`
    width:80%;
    height:100%;
`

const HeadingWrapper = styled.div`
    width:100%;
    height:5vh;
`

const FlexWrapper = styled.div`
    display:flex;
    width:100%;
    height:100%;
`

const SetView = () => {
    return (
    <MainTemplate>
        <Container>
            <HeadingWrapper>
                <H2 fontWeight={FontsWeights.montserrat.bold}>Kocham javascript </H2>
            </HeadingWrapper>
            <FlexWrapper>
                <Navigation>
                    <H2 fontSize={14} color={colors.}>Learn</H2>
                </Navigation>
                <CardWrapper></CardWrapper>
            </FlexWrapper>
        </Container>
    </MainTemplate>
    );
};

export default SetView;