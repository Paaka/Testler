import React from 'react';
import Sidebar from '../components/Organisms/Sidebar/Sidebar';

const MainTemplate = ({children}) => {
   return( 
    <div>
        <Sidebar></Sidebar>
        {children}
    </div>)
}

export default MainTemplate;