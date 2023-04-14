import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import ProtectedRoute from './ProtectedRoute';
import UserAccount from '../pages/UserAccount';
import Share from '../pages/Share';
import Retrieve from '../pages/Retrieve';
import NotFound from '../pages/NotFound';
import React from 'react';

export const AppRoutes: React.FC = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="account" element={<ProtectedRoute><UserAccount/></ProtectedRoute>}/>
                    <Route path="share" element={<ProtectedRoute><Share/></ProtectedRoute>}/>
                    <Route path="retrieve" element={<Retrieve/>}>
                        <Route path=":secretID" element={<Retrieve/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </Router>
    );
};