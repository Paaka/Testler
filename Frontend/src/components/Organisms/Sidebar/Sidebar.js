import React from 'react';
import H2 from '../../Atoms/Typography/H2/H2';
import ButtonWithLabel from '../../Molecules/ButtonWithLabel/ButtonWithLabel';
import { Link } from 'react-router-dom';
import Routes from '../../../Routes/Routes';
import styled from 'styled-components';
import colors from '../../../constants/colors';

const Wrapper = styled.div`
    height: 10vh;
    width: 100vw;
    background-color: ${colors.primary};
    display: flex;
    align-items: center;
    padding: 5px;
`

const Sidebar = props => {
    return(
    <Wrapper>
        <Link to={Routes.main} style={{textDecoration:'none'}}>
            <H2>Testler</H2>
        </Link>
        <Link to={Routes.newset} style={{textDecoration:'none'}}> 
            <ButtonWithLabel path={require('../../../assets/add.svg')}>
               Create
            </ButtonWithLabel>
        </Link>
    </Wrapper>)
}

export default Sidebar;