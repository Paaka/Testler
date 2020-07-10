import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 18px;
    height: 18px;
`

const DivImage = ({path}) => {
    return(<StyledImg className="DivImage" src={path}/>)
}

export default DivImage