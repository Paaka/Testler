import React from 'react';
import './H2.scss';

const StyledH2 = ({color, children}) => {
    return <h2 className={`styledH2 ${color}`}>{children}</h2>
}

export default StyledH2;