import React from 'react';
import styled from 'styled-components';
import {Fonts, FontsWeights} from '../../../../constants/fonts';

const H2 = styled.h2`
    color: ${props => props.color ? props.color : "black"};
    font-size:${props => props.fontSize ? props.fontSize+"px" : '24px' };
    font-family:${Fonts.montserrat}, 'sans-serif';
    font-weight:${props => props.fontWeight ? props.fontWeight : FontsWeights.montserrat.medium};
`

const StyledH2 = ({color, fontWeight, fontSize, children}) => {
    return <H2 
                fontSize={fontSize}
                fontWeight={fontWeight}
                color={color}>
                    {children}
            </H2>
}

export default StyledH2;