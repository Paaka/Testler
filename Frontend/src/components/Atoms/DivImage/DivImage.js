import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: ${props => props.width ? props.width + 'px' : '18px'};
    height: ${props => props.height ? props.height + 'px' : '18px'};
`

const DivImage = ({path, height, width}) => {
    return(<StyledImg
                width={width}
                height={height}
                src={path}/>)
}

export default DivImage