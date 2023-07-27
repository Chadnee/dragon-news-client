import React from 'react';
import NavBar from '../pages/Shared/Header/Navbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;