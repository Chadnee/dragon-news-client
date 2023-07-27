import React from 'react';

import { Link, Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Home from '../pages/Home/Home/Home';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;