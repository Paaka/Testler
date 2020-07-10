import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
    color: ${props => props.color};
    font-size:24px;
`

const StyledH2 = ({color="#ebebeb", children}) => {
    return <H2 color={color}>{children}</H2>
}

export default StyledH2;