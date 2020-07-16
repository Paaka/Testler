import React from 'react';
import styled from 'styled-components';
//Compontent & constants
import SidebarLink from '../../Atoms/SidebarLink/SidebarLink';
import Routes from '../../../Routes/Routes';
//svgs
import HomeIcon from '../../../assets/home-run.svg'
import AddIcon from '../../../assets/add-bl.svg'


const Wrapper = styled.div`
    margin-left:5vw;
    background-color:white;
    width:20vw;
    height:90vh;
`

const VerticalSidebar = () => {
    return(<Wrapper>
        <SidebarLink 
            linkPath={Routes.main}
            icon={HomeIcon}>Home</SidebarLink>
        <SidebarLink 
            linkPath={Routes.newset}
            icon={AddIcon}>
            Create
        </SidebarLink>
    </Wrapper>)
}

export default VerticalSidebar;