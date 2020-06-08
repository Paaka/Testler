import React from 'react';
import H2 from '../../Atoms/Typography/H2/H2';
import './Sidebar.scss';
import ButtonWithLabel from '../../Molecules/ButtonWithLabel/ButtonWithLabel';
import { Link } from 'react-router-dom';
import Routes from '../../../Routes/Routes';

const Sidebar = props => {
    return(
    <div className="SidebarWrapper">
        <Link to={Routes.main}>
            <H2>Testler</H2>
        </Link>
        <Link to={Routes.newset}> 
            <ButtonWithLabel path={require('../../../assets/new.svg')}>
               Create
            </ButtonWithLabel>
        </Link>
    </div>
    )
}

export default Sidebar;