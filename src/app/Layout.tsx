// todo typings

import React from 'react';
import {connect} from 'redux-bundler-react';
import {Outlet} from 'react-router-dom';
import Navbar from './Nav';


const Layout = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default connect(
    Layout
);
