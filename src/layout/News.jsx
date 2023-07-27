import React from 'react';
import { Outlet } from 'react-router-dom';

const News = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default News;