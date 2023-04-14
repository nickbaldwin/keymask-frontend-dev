import React from 'react';
import { connect } from 'redux-bundler-react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children, authUserData }) => {

    if (!authUserData) {
        // todo - login
        return <Navigate to="/" />;
    }
    return children;
};

// todo - connect
export default connect(
    ProtectedRoute
);