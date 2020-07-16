import React from 'react';
import colors from '../../../../constants/colors';
import styled from 'styled-components';

const StyledParagraph = styled.p`
    color: ${props => props.color ? props.color :colors.white};
    font-size:16px;
`

const Paragraph = ({children, color}) => <StyledParagraph color={color}>{children}</StyledParagraph>

export default Paragraph;