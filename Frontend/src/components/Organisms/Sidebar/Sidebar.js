import React from 'react';
import H2 from '../../Atoms/Typography/H2/H2';
import './Sidebar.scss';
import ButtonWithLabel from '../../Molecules/ButtonWithLabel/ButtonWithLabel';

const Sidebar = props => {
    return(
    <div className="SidebarWrapper">
        <H2>Testler</H2>
        <ButtonWithLabel path={require('../../../assets/new.svg')}> Create</ButtonWithLabel>
    </div>
    )
}

export default Sidebar;