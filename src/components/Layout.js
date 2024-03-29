import React from 'react';
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className='bg-main flex flex-col min-h-screen'>
            <Navbar/>
            {children}
        </div>
    );
};

export default Layout;