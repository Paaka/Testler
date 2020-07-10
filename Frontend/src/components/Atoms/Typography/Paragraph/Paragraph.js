import React from 'react';
import colors from '../../../../constants/colors';
import styled from 'styled-components';

const StyledParagraph = styled.p`
    color: ${colors.white};
    font-size:16px;
`

const Paragraph = ({children}) => <StyledParagraph>{children}</StyledParagraph>

export default Paragraph;